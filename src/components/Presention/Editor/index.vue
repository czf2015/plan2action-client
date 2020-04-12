<template>
  <component :is="type" :width="width" :height="height" :language="language" />
</template>


<script>
export default {
  components: {
    md: () => import("vue-meditor"),
    monaco: () => import("vue-monaco-editor"),
    svgeditor: () => import("./svgeditor")
  },

  props: {
    type: {
      type: String,
      default: "md"
    },
    width: {
      type: Number,
      default: 1500
    },
    height: {
      type: Number,
      default: 800
    },
    language: {
      type: String,
      default: "typescript"
    }
  }
};
</script>


<style>
</style>