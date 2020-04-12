<template>
  <div class="reveal">
    <span
      v-for="(letter, i) in letters"
      :key="i"
      :style="{animationDelay: `${delay + Math.abs(i - middle) * 0.1}s`}"
    >{{letter}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "sword art online"
    },
    delay: {
      type: Number,
      default: 0.3
    }
  },

  data() {
    const letters = this.text.split("");
    return {
      letters,
      middle: letters.filter(c => c !== " ").length / 2
    };
  }
};
</script>

<style lang="less" scoped>
.reveal {
  position: relative;
  display: flex;
  justify-content: center;
  color: #6ee1f5;
  background-color: #222;
  line-height: 3;
  padding: 5px 100px;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;

  span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 2.4s forwards;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: white;
    opacity: 0;
    transform: scale(0);
  }

  &::before {
    left: 50%;
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }

  &::after {
    right: 50%;
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: 25%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: 25%;
    opacity: 1;
    transform: scale(0.9);
  }
}
</style>