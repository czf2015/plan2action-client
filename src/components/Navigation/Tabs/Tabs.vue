<template>
  <div class="tabs">
    <Columns :list="list" :selected="selected" @select="handleSelect">
    
    </Columns>
    <slot :data="content" />
  </div>
</template>


<script>
import Columns from "./Columns";

export default {
  components: {
    Columns
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Array,
      default: 0
    },
  },
  data() {
    return {
      content: [],
      // saved: true,
    };
  },
  methods: {
    handleColumns(payload) {
      //
    }
  }
};
</script>


<style lang="less" scoped>
.tabs {
}
</style>