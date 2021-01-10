<template>
  <div>
    <div v-if="img" class="card-image">
      <a v-if="link" :href="link" target="_blank">
        <img :src="img">
        <span class="card-title">{{titulo || ''}}</span>
      </a>
      <div v-else>
        <img :src="img">
        <span class="card-title">{{titulo || ''}}</span>
      </div>
    </div>
    <div v-else class="only-title">
      <a v-if="link && !img" :href="link" target="_blank">
        <span class="card-title">{{titulo || ''}}</span>
      </a>
      <span v-else class="card-title">{{titulo || ''}}</span>
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
      type: String|undefined,
      required: false,
    },
    titulo: {
      type: String,
      required: false,
    },
    txt: {
      type: String,
      required: true,
    },
    link: {
      type: String|undefined,
      required: false,
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped >
  .only-title .card-title {
      margin-left: 24px;
  }
</style>
