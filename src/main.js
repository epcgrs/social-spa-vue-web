// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/';

import Vuex from 'vuex'
Vue.use(Vuex);

var store = {
  state: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    feed: [],
    userContents: [],
    friends: []
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getToken: state => {
      return (state.user) ? state.user.token : null;
    },
    getFeed: state => {
      return state.feed.data;
    },
    getFriends: state => {
      return state.friends;
    }
  },
  mutations: {
    setUser(state, n) {
      state.user = n;
    },
    setFeed(state, n) {
      state.feed = n;
    },
    setNewFeedItem(state, n) {
      state.feed.data.unshift(n);
    },
    appendFeedItems(state, list) {
      for(let item of list.data) {
        state.feed.data.push(item);
        state.feed.next_page_url = list.next_page_url;
      }
    },
    setFriends(state, list) {
      state.friends = list;
    }
  }
}

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueToast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router,
  components: { App },
  template: '<App/>'
})
