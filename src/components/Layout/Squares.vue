<template>
  <div class="squares">
    <div class="squares-row" v-for="(row, i) in rows" :key="i">
      <div class="squares-col" v-for="(col, j) in row" :key="j">
        <slot :data="col" />
      </div>
    </div>
  </div>
</template>


<script>
import { devide } from "@/utils/Array";

export default {
  props: {
    list: Array,
    count: Number
  },
  computed: {
    rows() {
      return devide(this.list, this.count);
    }
  }
};
</script>


<style lang="less" scoped>
.squares-row {
  display: flex;

  &:nth-child(1) {
    margin-bottom: 0.28rem;
  }

  .squares-col {
    flex: 1;
    flex-direction: column;
    height: 2.04rem;
    text-align: center;

    &:nth-child(1) {
      margin-right: 0.26rem;
    }
  }
}
</style>