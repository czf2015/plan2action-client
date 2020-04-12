<template>
  <div :style="{width: `${base * 100 / base}%`}">
    <div v-for="(row, i) in divides" :key="i" style="display: flex">
      <template v-for="(col, j) in row">
        <component
          v-if="Array.isArray(col)"
          :is="'Grid'"
          :divides="col"
          :base="calcBase(col)"
          :key="j"
        />
        <div v-else :style="{flex: `${col}`}" :key="j">{{col}}</div>
      </template>
    </div>
  </div>
</template>


<script>
import {calcBase} from './helpers'

export default {
  name: "Grid",

  props: {
    divides: {
      type: Array,
      default: () => []
    },
    base: {
      type: Number,
      default: 12
    }
  },

  methods: {
    calcBase
  }
};
</script>

<style>
</style>