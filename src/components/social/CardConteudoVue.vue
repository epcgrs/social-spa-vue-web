<template>

  <div class="card">
    <div class="card-content">
      <div class="row valign-wrapper">
        <grid-vue tamanho="2">
          <img :src="perfil" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
        </grid-vue>
        <grid-vue tamanho="10">
          <span class="black-text">
            <h5><strong>{{nome}}</strong></h5>
            <small>{{data}}</small>
          </span>
        </grid-vue>
      </div>

      <slot />

    </div>
    <div class="card-action">
      <p>
        <i class="small material-icons">favorite_border</i>
        <i class="small material-icons">insert_comment</i>
      </p>
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
    }
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
