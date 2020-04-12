<template>
  <button class="button" @click="$emit('click')" :style="styles">
    <Icon :src="icon" v-if="icon" />
    <slot />
  </button>
</template>


<script>
import Icon from "@/components/Basic/Icon";
import styles from "./styles";
import { filter } from "@/utils/Object";

export default {
  components: {
    Icon
  },

  props: {
    type: {
      type: String,
      default: "" // 'primary' | 'dashed' | 'link' | ''
    },
    danger: {
      type: Boolean,
      default: false
    },
    gost: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "" // 'circle' | 'round' | ''
    },
    size: {
      type: String,
      default: "" // 'large' | 'small' | ''
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      styles: filter(styles, this)
    };
  }
};
</script>


<style lang="less" scoped>
</style>