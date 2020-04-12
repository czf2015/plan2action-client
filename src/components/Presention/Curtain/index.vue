<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Bubble: () => import("./Bubble")
  },

  props: {
    theme: {
      type: String,
      default: "Bubble"
    }
  }
};
</script>
