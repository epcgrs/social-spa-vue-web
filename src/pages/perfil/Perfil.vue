<template>
  <site-template>

    <div slot="menuesquerdo" class="imagem-esquerda">
      <img :src="usuario.image || '/static/images/avatar.png'" class="responsive-img" alt="">
    </div>

    <div slot="principal" >


      <h2>Perfil</h2>
      <input type="text" placeholder="Nome" v-model="usuario.name">
      <input type="email" placeholder="Email" disabled readonly v-model="usuario.email">

      <div class="file-field input-field">
        <div class="btn">
          <span>Imagem</span>
          <input type="file" @change="saveImage">
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text">
        </div>
      </div>

      <input type="password" placeholder="Senha" v-model="usuario.password">
      <input type="password" placeholder="Confirmar Senha" value=""  v-model="usuario.password_confirmation">
      <button class="btn" @click="atualizar">Atualizar</button>

    </div>

  </site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'

export default {
  name: 'Login',
  components: {
    SiteTemplate
  },
  data () {
    return {
      usuario: {
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image: '',
      },
      userData: [],
    }
  },
  methods: {
    atualizar() {

      this.$http.put('usuario/atualizar',  this.usuario, { headers: { 'authorization': 'Bearer ' + this.$store.getters.getToken } } )
      .then(response => {
        if( response.data.status && response.data.user.token ) {
          this.$toast.open({
              message: 'Sucesso!',
              type: 'success',
              position: 'top-right',
              duration: 3000
          });

          localStorage.setItem('user', JSON.stringify(response.data.user));

          this.$router.go();

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
    saveImage(e) {
      let arquivo = e.target.files || e.dataTransfer.files;
      if (!arquivo.length) {
        return;
      }

      let reader = new FileReader();

      reader.onloadend = (e) => {
        this.usuario.image = e.target.result;
      };

      reader.readAsDataURL(arquivo[0]);

    },
  },
  created() {
    let userAux = this.$store.getters.getUser;

    if (userAux) {
        this.userData = userAux;

        this.usuario.name = this.userData.name;
        this.usuario.id = this.userData.id;
        this.usuario.email = this.userData.email;
        this.usuario.image = this.userData.image;
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
