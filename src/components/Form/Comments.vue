<template>
  <div class="comments">
    <form>
      <input type="textarea" v-model="message" />
      <button @click="publish">发布</button>
    </form>
    <ul>
      <li v-for="({id, content, icon}) in comments" :key="id">
        <p>
          {{content}}
          <Icon :src="icon" />
        </p>
      </li>
    </ul>
  </div>
</template>


<script>
// import Icon from '@/components/Basic/Icon'

export default {
  props: {
    comments: Array,
    default: () => []
  },

  data() {
    return {
      message: ""
    };
  },

  methods: {
    publish() {
      this.$emit({ type: "comments", message: this.message });
      this.message = "";
    }
  }
};
</script>


<style lang="less" scoped>
.comments {
}
</style>