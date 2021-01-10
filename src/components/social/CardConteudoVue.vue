<template>
  <div class="row">
    <div class="card">
      <div class="card-content">
        <div class="row valign-wrapper">
          <grid-vue tamanho="2">
            <img :src="perfil" alt="" class="circle responsive-img" style="height: 80px; width: 80px; object-fit: cover;"> <!-- notice the "circle" class -->
          </grid-vue>
          <grid-vue tamanho="10">
            <span class="black-text">
              <h5><router-link :to="'/pagina/'+ authorId +'/'+ this.slugify(nome)"> <strong>{{nome}}</strong></router-link></h5>
              <small>{{data}}</small>
            </span>
          </grid-vue>
        </div>

        <slot />

      </div>
      <div class="card-action">
        <p>
          <i @click="likeContent" class="small material-icons favorite-icon">{{liked}}</i> {{likesCount}}
          <i @click="openCommentDialog" class="small material-icons comments-icon">insert_comment</i> {{commentsCount}}
        </p>
        <div v-if="showComments">
          <p>
            <form action="#" :id="'sendComment'+id" @submit.prevent="sendComment" class="right-align">
              <input type="text" placeholder="Commentar" required v-model="text">
              <button type="submit" class="btn waves-effect waves-light button-send-comment" :form="'sendComment'+id"><i class="small material-icons">send</i></button>
            </form>
          </p>
          <p>
            <ul class="collection">
              <li v-for="cComment in comments" class="collection-item avatar"  :key="cComment.id">
                <img :src=" cComment.user.image ||'/static/images/avatar.png'" :alt="cComment.user.name" class="circle">
                <span class="title">{{cComment.user.name}} - <small>{{cComment.created_at}}</small> </span>
                <p>
                  {{cComment.text}}
                </p>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridVue from '@/components/layouts/GridVue'

export default {
  name: 'CardConteudoVue',
  components: {
    GridVue
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    perfil: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    totalLikes: {
      type: Number|undefined,
      required: true,
    },
    totalComments: {
      type: Number|undefined,
      required: true,
    },
    alreadyLike: {
      type: Boolean|undefined,
      required: true,
    },
    authorId: {
      type: Number,
      required: true,
    },
    comments: {
      type: Array,
      required: false,
    }
  },
  data () {
    return {
      liked: this.alreadyLike ? 'favorite' : 'favorite_border',
      likesCount: this.totalLikes,
      text: '',
      commentsCount: this.totalComments,
      showComments: false,
      userData: [],
    }
  },
  methods: {
    likeContent() {
      if(this.liked == 'favorite_border') {
        this.liked = 'favorite';
      } else {
        this.liked = 'favorite_border';
      }

      this.$http.post('conteudo/toggle-like', {content_id: this.id}, { headers: { 'authorization': 'Bearer ' + this.$store.getters.getToken } })
      .then(response => {
        if(response.data.status) {
          this.likesCount = response.data.count_likes;
        }
      }).catch(error => {
        this.$toast.open({
              message: 'Ocorreu um erro.',
              type: 'warning',
              position: 'top-right',
              duration: 3000
          });
      });
    },
    openCommentDialog() {
      if(this.showComments) {
        this.showComments = false;
      } else {
        this.showComments = true;
      }
    },
    sendComment() {
      this.$http.post('conteudo/comment', {content_id: this.id , text: this.text}, { headers: { 'authorization': 'Bearer ' + this.$store.getters.getToken } })
      .then(response => {
        this.commentsCount++;
        let newComment = { text: response.data.comment.text, created_at: 'Agora mesmo', user: { name: this.userData.name, id: this.userData.id, image: this.userData.image, }  };
        this.comments.push( newComment );
        this.text = '';
      }).catch(error => {
        this.$toast.open({
              message: 'Ocorreu um erro.',
              type: 'warning',
              position: 'top-right',
              duration: 3000
          });
      })
    },
    slugify(text, separator = "-") {
      return text
        .toString()
        .normalize('NFD')                   // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
        .replace(/\s+/g, separator);
    }
  },
  created() {
     this.userData = this.$store.getters.getUser;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .favorite-icon {
    color: #7e57c2;
    cursor: pointer;
  }
  .button-send-comment {
    background-color: #7e57c2;
  }
  .comments-icon {
    color: #7e57c2;
    cursor: pointer;
  }
</style>
