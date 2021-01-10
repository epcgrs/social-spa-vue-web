<template>
  <div class="row">
    <form action="#" @submit.prevent="addContent">
      <grid-vue class="input-field" tamanho="12">
        <input type="text" v-model="conteudo.title" required>
        <textarea v-if="conteudo.title" v-model="conteudo.text" placeholder="Conteúdo" class="materialize-textarea" required data-length="120">
        </textarea>
        <input v-if="conteudo.title && conteudo.text" type="url" v-model="conteudo.link" placeholder="Link">
        <div class="file-field input-field" v-if="conteudo.title && conteudo.text">
          <div class="btn">
            <span>Imagem</span>
            <input type="file" @change="saveImage">
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
          </div>
        </div>
        <label>O que está acontecendo?</label>
      </grid-vue>
      <p class="right-align">
        <button v-if="conteudo.title && conteudo.text" class="btn waves-effect waves-light">Publicar</button>
      </p>
    </form>
  </div>
</template>

<script>
import GridVue from '@/components/layouts/GridVue'

export default {
  name: 'PublicarConteudo',
  components: {
    GridVue
  },
  data () {
    return {
      conteudo: {
        user_id:  null,
        title: '',
        text: '',
        link: '',
        image: '',
      },
      userData: [],
    }
  },
  methods: {
    addContent() {
      this.$http.post('conteudo/salvar', this.conteudo, { headers: { 'authorization': 'Bearer ' + this.$store.getters.getToken } })
      .then(response => {
         this.$toast.open({
            message: 'Sucesso!',
            type: 'success',
            position: 'top-right',
            duration: 3000
          });
          this.addToFeed(response.data.content);

          this.conteudo.title = '';
          this.conteudo.text = '';
          this.conteudo.link = '';
          this.conteudo.image = '';
      })
      .catch(error => {
          this.$toast.open({
              message: 'Ocorreu um erro.',
              type: 'warning',
              position: 'top-right',
              duration: 5000
          });
      });
    },
    saveImage(e) {
      let arquivo = e.target.files || e.dataTransfer.files;
      if (!arquivo.length) {
        return;
      }

      let reader = new FileReader();

      reader.onloadend = (e) => {
        this.conteudo.image = e.target.result;
      };

      reader.readAsDataURL(arquivo[0]);

    },
    addToFeed(newContent) {

      this.$store.commit('setNewFeedItem', newContent);

    }
  },
  created() {
    let userAux = localStorage.getItem('user');

    if (userAux) {
        this.userData = JSON.parse(userAux);
    }
  },
  mounted() {
    this.conteudo.user_id = this.userData.id;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
