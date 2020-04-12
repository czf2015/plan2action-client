<template>
  <div class="loading">
    <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())" />
  </div>
</template>


<script>
export default {
  components: {
    Wave: () => import("./Wave"),
    Moon: () => import("./Moon"),
    Stere: () => import("./Stere"),
  },

  props: {
    theme: {
      type: String,
      default: "stere"
    }
  }
};
</script>

<style scoped>
.loading {

}
</style>