<template>
  <div>
    <header>
      <nav-bar logo="Social" cor="deep-purple lighten-1" url="/" >
          <li v-if="user == null"><router-link to="/login">Entrar</router-link></li>
          <li v-if="user == null"><router-link to="/cadastro">Cadastrar</router-link></li>
          <li v-if="user"><router-link to="/perfil">{{user.name}}</router-link></li>
          <li v-if="user"><a @click="logout()">Sair</a></li>
      </nav-bar>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <grid-vue tamanho="7">
            <slot name="menuesquerdo"></slot>
          </grid-vue>

          <grid-vue tamanho="5" class="form-wrapper">
            <card-menu-vue>
            <slot name="principal"></slot>
            </card-menu-vue>
          </grid-vue>
        </div>
      </div>
    </main>

    <main-footer
      cor="deep-purple lighten-1"
      logo="Social"
      descricao="Descrição do site"
      ano="2020"
    >
      <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </main-footer>
  </div>
</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import MainFooter from '@/components/layouts/Footer'
import GridVue from '@/components/layouts/GridVue'
import CardMenuVue from '@/components/layouts/CardMenuVue'

export default {
  name: 'LoginTemplate',
  data() {
    return {
      user: null,
    }
  },
  components: {
    NavBar,
    MainFooter,
    GridVue,
    CardMenuVue
  },
  methods: {
    logout() {
      localStorage.clear();
      this.user = null;
      this.$router.push('/login');
    }
  },
  created() {
    let userAux = localStorage.getItem('user');

    if (userAux) {
        this.user = JSON.parse(userAux);
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  margin-top: 50px;
}
</style>
