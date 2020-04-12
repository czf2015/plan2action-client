<template>
  <div class="badge">
    <span :style="{width, lineHeight: height, backgroundColor: bgColor}">{{text}}</span>
    <slot />
  </div>
</template>


<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'red'
    },
    color: {
      type: String,
      default: '#fff'
    },
    text: {
      type: String,
      default: "0"
    },
    width: {
        type: String,
        default: '15px'
    },
    height: {
        type: String,
        default: '15px'
    }
  }
};
</script>


<style lang="less" scoped>
.badge {
  display: inline-block;
  position: relative;

  span {
    position: absolute;
    right: -5px;
    top: 5px;
    display: inline-block;
    text-align: center;
    color: white;
    border-radius: 50%;
  }
}
</style>