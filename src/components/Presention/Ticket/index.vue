<template>
  <component :is="theme.replace(/^[a-z]/, c => c.toUpperCase())">
    <slot />
  </component>
</template>


<script>
export default {
  components: {
    Coupon: () => import("./Coupon")
  },

  props: {
    theme: {
      type: String,
      default: "Coupon"
    }
  }
};
</script>
