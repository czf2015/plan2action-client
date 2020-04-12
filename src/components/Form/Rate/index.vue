<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Star: () => import("./Star")
  },

  props: {
    theme: {
      type: String,
      default: "Star"
    }
  }
};
</script>
