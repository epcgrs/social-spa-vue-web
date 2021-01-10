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
          <grid-vue tamanho="4">
              <card-menu-vue>
                <slot name="menuesquerdo" />
              </card-menu-vue>

              <card-menu-vue>
                <h3>Amigos</h3>
                <ul>
                  <li>Rafael</li>
                  <li>Claudia</li>
                  <li>Aline</li>
                </ul>
              </card-menu-vue>
          </grid-vue>

          <grid-vue tamanho="8">
            <slot name="principal"></slot>
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
  name: 'SiteTemplate',
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
      this.$store.commit('setUser', null)

      localStorage.clear();
      this.user = null;
      this.$router.push('/login');
    }
  },
  created() {
    let userAux = this.$store.getters.getUser;

    if (userAux) {
        this.user = userAux;
    } else {
      this.$router.push('/login');
    }
  }
}
</script>

<style>

</style>
