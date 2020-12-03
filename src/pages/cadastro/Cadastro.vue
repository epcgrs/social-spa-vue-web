<template>
  <login-template>

    <div slot="menuesquerdo" class="imagem-esquerda">
      <img src="https://amplificadigital.com.br/wp-content/uploads/2020/01/amplifica_banner_blog-4.jpg" class="responsive-img" alt="">
    </div>

    <div slot="principal" >


      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" value="">
      <input type="email" placeholder="Email" value="">
      <input type="password" placeholder="Senha" value="">
      <input type="password" placeholder="Confirmar Senha" value="">
      <button class="btn">Cadastrar</button>
      <router-link class="btn orange" to="/login">Já Tenho Conta</router-link>

    </div>

  </login-template>
</template>

<script>
import LoginTemplate from '@/templates/LoginTemplate'

export default {
  name: 'Login',
  components: {
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
.imagem-esquerda {
  margin-top: 50px;
}
</style>
