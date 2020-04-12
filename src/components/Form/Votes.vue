<template>
  <div class="votes">
    <h3 class="title">{{title}}</h3>
    <ul class="votes-list">
      <li v-for="({id, icons, desc, count}) in votes" :key="id" @click="() => toggle(id)">
        <span class="desc">{{desc}}</span>
        <Icon :src="select && select !== id ? icons[0] : icons[1]" />
        <span class="count">{{count}}</span>
      </li>
    </ul>
  </div>
</template>


<script>
import Icon from "@/components/Basic/Icon";

export default {
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: "投票箱"
    },
    list: {
      type: Array,
      default: () => [
        {
          id: "总统候选人0",
          desc: "赞成",
          icons: ["/icons/logo.png", ""],
          count: 0
        },
        {
          id: "总统候选人1",
          desc: "反对",
          icons: ["/icons/logo.png", ""],
          count: 0
        }
      ]
    },
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      votes: [...this.list],
      select: this.selected
    };
  },
  methods: {
    toggle(id) {
      if (this.select && this.select !== id) return;
      const vote = this.votes.find(vote => vote.id == id);
      if (this.select) {
        this.select = "";
        vote.count--;
      } else {
        this.select = id;
        vote.count++;
      }
      this.$emit({ type: "toggle", message: id });
    }
  }
};
</script>


<style lang="less" scoped>
.votes {
  min-width: 100px;
  width: 100px;
  .title {
  }
  .votes-list {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;

      .desc {
      }
      .count {
        //
      }
    }
  }
}
</style>