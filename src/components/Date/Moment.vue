<template>
  <span v-time="moment" />
</template>


<script>
import "@/directives/time.js";

export default {
  data() {
    return {
      moment: Date.now()
    };
  }
};
</script>