<template>
  <ul class="steppers">
    <li v-for="(step, idx) in steps" :key="idx" v-show="current == idx">
      <slot :data="undefind" />
      <button @click="prev">prev</button>
      <button @click="$emit({type: 'step', message: 'next'})">next</button>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    current: {
      type: Number,
      default: 0
    }
  },

  computed: {
    content() {
        // this.
        return 'content'
    }
  },

  methods: {
    prev() {
      this.$emit({ type: "step", message: "prev" });
    },
    next() {
      this.$emit({ type: "step", message: "next" });
    }
  }
};
</script>

<style>
</style>