<template>
  <div class="loading">
    <i class="dot" v-for="(color, i) in colors" :key="i" :style="{backgroundColor: color}" />
  </div>
</template>


<script>
export default {
  props: {
    colors: {
      type: Array,
      default: () => ["#7ef9ff", "#89cff0", "#4682b4", "#0f52ba", "#000080"]
    }
  }
};
</script>


<style lang="less" scoped>
@max: 10;

.loading {
  display: flex;
  animation-delay: 1s;

  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    .loop(@count) when (@count > 0) {
      &:nth-child(@{count}) {
        &::before {
          animation-delay: @count * 0.2s;
        }
      }
      .loop(@count - 1);
    }

    .loop(@max);
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
</style>