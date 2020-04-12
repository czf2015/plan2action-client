<template>
  <p class="landIn">
    <span
      v-for="(letter, i) in letters"
      :key="i"
      :style="{animationDelay: `${i * 0.05}s`}"
    >{{letter}}</span>
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Ano hi watashitachi mada shiranai no Fushigi no monogatari desu."
    },
  },

  data() {
    return {
      letters: this.text.split("")
    };
  },
};
</script>

<style lang="less" scoped>
.landIn {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.8;
  color: black;
  font-family: Lora, serif;
  white-space: pre;

  span {
    animation: landIn 0.8s ease-out both;
  }
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>