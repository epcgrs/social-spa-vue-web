<template>
  <div>
    <div v-if="img" class="card-image">
      <img :src="img">
      <span class="card-title">{{titulo || ''}}</span>
    </div>

    <div v-if="txt" class="card-content">
      {{txt}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardDetalheVue',
  props: {
    img: {
      type: String,
      required: false,
    },
    titulo: {
      type: String,
      required: false,
    },
    txt: {
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
