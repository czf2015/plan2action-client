<template>
  <div class="page" v-show="!loading">
    <!-- <Header /> -->
    <main :style="{margin}">
      <slot />
    </main>
    <!-- <Aside />
    <Footer /> -->
  </div>
</template>


<script>
// import Header from "./partials/Header";
// import Aside from "./partials/Aside";
// import Footer from "./partials/Footer";

export default {
  components: {
    // Header,
    // Aside,
    // Footer
  },

  props: {
    margin: {
      type: String,
      default: "0 0.32rem"
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
