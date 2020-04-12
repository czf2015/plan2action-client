<template>
  <ul class="toolbar">
    <li v-for="({ link, icon, text }, idx) in items" :key="idx">
      <a :href="link">
        <Icon :src="icon" />
        <span>{{ text }}</span>
      </a>
    </li>
  </ul>
</template>


<script>
import Icon from "@/components/Basic/Icon";

export default {
  components: {
    Icon
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>


<style lang="less" scoped>
.toolbar {
}
</style>
