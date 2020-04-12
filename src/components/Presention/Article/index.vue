<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Default: () => import("./Default"),
    GrownIn: () => import("./GrownIn")
  },

  props: {
    theme: {
      type: String,
      default: "default"
    }
  }
};
</script>
