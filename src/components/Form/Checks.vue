<template>
  <ul class="checks">
    <li v-for="({id, label, value, checked}) in checks" :key="id">
      <input type="checkbox" :id="id" :value="value" :checked="checked" v-model="result" />
      <label :for="id">
        <slot>{{label}}</slot>
      </label>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    checks: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      result: this.list
        .filter(({ checked }) => checked)
        .map(({ value }) => value)
    };
  },

  watch: {
    result() {
      //
      this.$emit({ type: "choice", message: result });
    }
  }
};
</script>


<style lang="less" scoped>
.checks {
}
</style>