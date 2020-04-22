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


<style scoped>
.button {
  display: inline-block;
  padding: 1em 2em;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  font-size: .28rem;
  box-shadow: 0 2px 25px rgba(204, 17, 79, 0.5);
  outline: 0;
  transition: transform ease-in 0.1s, background-color ease-in 0.1s,
    box-shadow ease-in 0.25s;
}
</style>