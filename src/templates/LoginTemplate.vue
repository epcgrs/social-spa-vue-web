<template>
  <div>
    <header>
      <nav-bar logo="Social" cor="deep-purple lighten-1" url="#" />
    </header>

    <main>
      <div class="container">
        <div class="row">
          <grid-vue tamanho="8">
            <slot name="menuesquerdo"></slot>
          </grid-vue>

          <grid-vue tamanho="4">
            <card-menu-vue>
            <slot name="principal"></slot>
            </card-menu-vue>
          </grid-vue>
        </div>
      </div>
    </main>

    <main-footer
      cor="deep-purple lighten-1"
      logo="Social"
      descricao="Descrição do site"
      ano="2020"
    >
      <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </main-footer>
  </div>
</template>

<script>
import NavBar from '@/components/layouts/NavBar'
import MainFooter from '@/components/layouts/Footer'
import GridVue from '@/components/layouts/GridVue'
import CardMenuVue from '@/components/layouts/CardMenuVue'

export default {
  name: 'LoginTemplate',
  components: {
    NavBar,
    MainFooter,
    GridVue,
    CardMenuVue
  }
}
</script>

<style>

</style>
