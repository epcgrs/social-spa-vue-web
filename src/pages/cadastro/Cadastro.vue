<template>
  <login-template>

    <div slot="menuesquerdo" class="imagem-esquerda">
      <img src="https://amplificadigital.com.br/wp-content/uploads/2020/01/amplifica_banner_blog-4.jpg" class="responsive-img" alt="">
    </div>

    <div slot="principal" >


      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" v-model="usuario.name">
      <input type="email" placeholder="Email" v-model="usuario.email">
      <input type="password" placeholder="Senha" v-model="usuario.password">
      <input type="password" placeholder="Confirmar Senha" value=""  v-model="usuario.password_confirmation">
      <button class="btn" @click="cadastro">Cadastrar</button>
      <router-link class="btn orange" to="/login">Já Tenho Conta</router-link>

    </div>

  </login-template>
</template>

<script>
import axios from 'axios'
import LoginTemplate from '@/templates/LoginTemplate'

export default {
  name: 'Login',
  components: {
    LoginTemplate
  },
  data () {
    return {
      usuario: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods: {
    cadastro() {

      axios.post('http://localhost:8000/api/usuario/salvar',  this.usuario )
      .then(response => {
        if( response.data.status && response.data.user.token ) {
          this.$toast.open({
              message: 'Sucesso!',
              type: 'success',
              position: 'top-right',
              duration: 3000
          });

          localStorage.setItem('user', JSON.stringify(response.data.user));

          this.$router.push('/');

        }else if(!response.data.status) {
            this.$toast.open({
              message: 'usuário ou senha incorretos',
              type: 'warning',
              position: 'top-right',
              duration: 5000
          });
        }

      })
      .catch(error => {
        this.$toast.open({
            message: Object.values(error.response.data.errors),
            type: 'error',
            position: 'top-right',
            duration: 5000
        });
      })

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagem-esquerda {
  margin-top: 50px;
}
</style>
