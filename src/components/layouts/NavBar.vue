<template>
  <nav :class="cor || 'brown'">
    <div class="container">
      <div class="nav-wrapper">
        <a :href="url || '#'" class="brand-logo"><i class="material-icons">code</i> {{ logo || 'Site' }} </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html"><i class="material-icons">search</i></a></li>
          <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
          <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
          <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
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
