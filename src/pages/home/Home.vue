<template>

  <site-template>

    <publicar-conteudo></publicar-conteudo>

    <card-conteudo-vue
      perfil="http://materializecss.com/images/yuna.jpg"
      nome="Maria Silva"
      data="31/03/2020 23:58"
    >

      <card-detalhe-vue
        img="http://materializecss.com/images/sample-1.jpg"
        titulo=""
        txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, illo culpa harum possimus sit consequuntur animi aliquam a illum natus rerum placeat. Ab voluptatem pariatur temporibus ad error accusamus autem."
      >
      </card-detalhe-vue>

    </card-conteudo-vue>

  </site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CardConteudoVue from '@/components/social/CardConteudoVue'
import CardDetalheVue from '@/components/social/CardDetalheVue'
import PublicarConteudo from '@/components/social/PublicarConteudo'

export default {
  name: 'Home',
  components: {
    CardConteudoVue,
    CardDetalheVue,
    PublicarConteudo,
    SiteTemplate
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
