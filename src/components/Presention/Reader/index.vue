<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Progress: () => import("./Progress")
  },

  props: {
    theme: {
      type: String,
      default: "Progress"
    }
  }
};
</script>
