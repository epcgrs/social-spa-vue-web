<template>
  <card-conteudo-vue
    perfil="http://materializecss.com/images/yuna.jpg"
    nome="Maria Silva"
    data="31/03/2020 23:58"
  >

    <div class="card-image">
      <img src="http://materializecss.com/images/sample-1.jpg">
      <span class="card-title">Card Title</span>
    </div>

    <div class="card-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores fugit ipsum velit laborum assumenda totam exercitationem ex. Veritatis rem, quaerat laborum, quidem iste esse voluptatibus illum natus, cum numquam magnam?
    </div>

  </card-conteudo-vue>
</template>

<script>

import CardConteudoVue from '@/components/social/CardConteudoVue'

export default {
  name: 'Home',
  components: {
    CardConteudoVue
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
