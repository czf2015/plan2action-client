<template>
  <component :is="$props.type" :src="src" />
</template>


<script>
export default {
  components: {
    Default: () => import('./Default'),
    Close: () => import("./Close"),
  },

  props: {
    type: {
      type: String,
      default: "default"
    },
    src: {
      type: String
    }
  }
};
</script>