<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Picker: () => import("./Picker")
  },

  props: {
    theme: {
      type: String,
      default: "Picker"
    }
  }
};
</script>
