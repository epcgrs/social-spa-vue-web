<template>
  <login-template>

    <div slot="menuesquerdo">
      <img src="https://amplificadigital.com.br/wp-content/uploads/2020/01/amplifica_banner_blog-4.jpg" class="responsive-img" alt="">
    </div>

    <div slot="principal">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value="">
      <input type="password" placeholder="Senha" value="">
      <input type="submit" class="btn" value="Entrar">
    </div>

  </login-template>
</template>

<script>
import LoginTemplate from '@/templates/LoginTemplate'

import CardConteudoVue from '@/components/social/CardConteudoVue'
import CardDetalheVue from '@/components/social/CardDetalheVue'
import PublicarConteudo from '@/components/social/PublicarConteudo'

export default {
  name: 'Login',
  components: {
    CardConteudoVue,
    CardDetalheVue,
    PublicarConteudo,
    LoginTemplate
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
