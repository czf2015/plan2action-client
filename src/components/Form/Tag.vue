<template>
  <ul class="marks">
    <li v-for="({id, selected, icons}) in items" :key="id" @click="() => toggle(id)">
      <Icon :src="selected ? icons[0] : icons[1]" />
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
    list: Array,
    default: () => []
  },
  data() {
    return {
      items: [...this.list]
    };
  },
  methods: {
    toggle(id) {
      const item = this.items.find(item => item.id == id);
      item.selected = !item.selected;
      //   handle()
      this.$emit({ type: "toggle", message: id });
    }
  }
};
</script>


<style lang="marks" scoped>
.marks {
}
</style>