<template>
  <footer :class="'page-footer ' + cor || 'brown'">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{logo}}</h5>
          <p class="grey-text text-lighten-4">{{descricao}}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <slot>
            </slot>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © {{ano}} Copyright Text
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    cor: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true,
    },
    ano: {
      type: String,
      required: true
    }
  }
}
</script>
