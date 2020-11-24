<template>
  <div>
    <header>
      <nav-bar logo="Social" cor="deep-purple lighten-1" url="#" />
    </header>

    <main>
      <div class="container">
        <div class="row">
          <grid-vue tamanho="4">
              <card-menu-vue>
                <div class="row valign-wrapper">
                  <grid-vue tamanho="4">
                    <img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                  </grid-vue>
                  <grid-vue tamanho="8">
                    <span class="black-text">
                      <h5>Maria Silva</h5>
                       Add the "circle" class to it to make it appear circular.
                    </span>
                  </grid-vue>
                </div>
              </card-menu-vue>
          </grid-vue>

          <grid-vue tamanho="8">
            <slot></slot>
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
  name: 'SiteTemplate',
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
