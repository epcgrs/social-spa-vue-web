<template>

  <site-template>

    <div slot="menuesquerdo">
      <div class="row valign-wrapper">
        <grid-vue tamanho="4">
          <img :src="userData.image || '/static/images/avatar.png'" alt="" class="circle responsive-img" style="height: 80px; width: 80px; object-fit: cover;"> <!-- notice the "circle" class -->
        </grid-vue>
        <grid-vue tamanho="8">
          <span class="black-text">
            <h5>{{userData.name}}</h5>
          </span>
        </grid-vue>
      </div>
    </div>

    <div slot="principal" v-scroll="this.handleScroll">
      <publicar-conteudo></publicar-conteudo>

      <div v-if="this.$store.getters.getFeed">
        <card-conteudo-vue

          v-for="content in this.$store.getters.getFeed"
          :key="content.id"
          :id="content.id"
          :total-likes="content.count_likes"
          :already-like="content.already_liked"
          :author-id="content.user.id"
          :perfil="content.user.image || '/static/images/avatar.png'"
          :nome="content.user.name"
          :data="content.created_at"
          :comments="content.comments"
          :total-comments="content.count_comments"
        >

          <card-detalhe-vue
            :img="content.image"
            :titulo="content.title"
            :txt="content.text"
            :link="content.link"
          >
          </card-detalhe-vue>

        </card-conteudo-vue>

        <button v-if="this.$store.state.feed.next_page_url" class="btn blue" @click="loadMore">Carregar Mais</button>
      </div>
      <div v-else>
        <div class="row valign-wrapper">
          <grid-vue tamanho="12">
            <h5>Sem conteúdos ainda</h5>
          </grid-vue>
        </div>
      </div>
    </div>

  </site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CardConteudoVue from '@/components/social/CardConteudoVue'
import CardDetalheVue from '@/components/social/CardDetalheVue'
import PublicarConteudo from '@/components/social/PublicarConteudo'
import GridVue from '@/components/layouts/GridVue'

export default {
  name: 'Home',
  components: {
    CardConteudoVue,
    CardDetalheVue,
    PublicarConteudo,
    SiteTemplate,
    GridVue
  },
  data () {
    return {
      userData: [],
      contents: [],
      showLoadMoreButton: true,
      stopScroll: false,
    }
  },
  methods: {
    handleScroll() {
      if(this.stopScroll) {
        return;
      }

      if (window.scrollY >= document.body.clientHeight - 1300) {
        this.loadMore()
        this.stopScroll = true
      }
    },
    getFeed() {
      this.$http.get('conteudo/feed', { headers: { 'authorization': 'Bearer ' + this.$store.getters.getToken } })
        .then(response => {
          this.$store.commit('setFeed', response.data)
          this.stopScroll = false
        })
        .catch(error => {
          this.$toast.open({
              message: 'Ocorreu um erro.',
              type: 'warning',
              position: 'top-right',
              duration: 3000
          });
        });
    },
    loadMore() {
      let nextUrl = this.$store.state.feed.next_page_url;
      if(!nextUrl) {
        this.showLoadMoreButton = false;
        return;
      }
      if(this.stopScroll) {
        return;
      }
      this.$http.get(nextUrl, { headers: { 'authorization': 'Bearer ' + this.$store.getters.getToken } })
        .then(response => {
          if(this.$route.name == "Home") {
            this.$store.commit('appendFeedItems', response.data);
            this.stopScroll = false;
          }
        })
        .catch(error => {
          this.$toast.open({
              message: 'Ocorreu um erro.',
              type: 'warning',
              position: 'top-right',
              duration: 3000
          });
        });
    },

  },
  created() {
    this.userData = this.$store.getters.getUser;
    if (!this.userData) {
      this.$router.push('/login');
    }
    this.getFeed();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
