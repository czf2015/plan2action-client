<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Neon: () => import("./Neon"),
    Fill: () => import("./Fill"),
    Video: () => import("./Video"),
    Glitch: () => import("./Glitch"),
  },

  props: {
    theme: {
      type: String,
      default: "Fill"
    }
  }
};
</script>
