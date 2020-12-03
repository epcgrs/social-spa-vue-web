<template>
  <nav :class="cor || 'brown'">
    <div class="container">
      <div class="nav-wrapper">
        <router-link :to="url || '/'" class="brand-logo"><i class="material-icons">code</i> {{ logo || 'Site' }} </router-link>
        <ul class="right hide-on-med-and-down">
          <slot />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    logo: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true
    },
    cor: {
      type: String,
      required: false
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
