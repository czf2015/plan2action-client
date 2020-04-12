<template>
  <div class="carousel">
    <ul class="scenes">
      <li
        v-for="(scene, idx) in scenes"
        class="scene animated"
        :class="cur_ === idx ? 'slideOutLeft' : ''"
        :style="{display: cur_ === idx ? 'block' : 'none'}"
        :key="idx"
      >
        <slot :data="scene" />
      </li>
    </ul>

    <ul class="scenes">
      <li
        v-for="(scene, idx) in scenes"
        class="scene animated"
        :class="cur === idx ? 'slideInRight' : ''"
        :style="{display: cur === idx ? 'block' : 'none'}"
        :key="idx"
      >
        <slot :data="scene" />
      </li>
    </ul>

    <ul class="tags">
      <li
        v-for="(scene, idx) in scenes"
        class="tag"
        :style="{ color: cur === idx ? 'red' : 'blue' }"
        :key="idx"
        @click="cur = idx"
      >{{idx + 1}}</li>
    </ul>
  </div>
</template>


<script>
import { INTERVAL } from "@/constants/TIME";

export default {
  props: {
    scenes: Array,
    current: Number
  },
  data() {
    return {
      cur: this.current,
      tid: -1
    };
  },
  computed: {
    cur_() {
      return this.cur > 0 ? this.cur - 1 : this.scenes.length - 1
    }
  },
  created() {
    this.tid = setInterval(() => {
      if (this.cur < this.scenes.length - 1) {
        this.cur += 1;
      } else {
        this.cur = 0;
      }
    }, 2 * INTERVAL);
  },
  beforeDestory() {
    clearInterval(this.tid);
  }
};
</script>


<style lang="less" scoped>
.carousel {
  position: relative;
  margin: 0 -0.32rem;

  .scenes {
    .scene {
      width: 100%;
      animation-duration: 2s;
    }
  }

  .scenes:nth-child(2) {
    position: absolute;
    top: 0;
  }

  .tags {
    position: absolute;
    bottom: 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 0.24rem;

    .tag {
      margin-right: 0.2rem;
      width: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>