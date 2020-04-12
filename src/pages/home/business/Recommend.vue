<template>
  <section id="home-recommend">
    <Headline :title="data.title" :desc="data.desc" />
    <Squares :list="data.list" :count="data.count" v-slot="slotProps">
      <a
        class="item"
        :href="slotProps.data.link"
        :style="{ backgroundImage: `url(${slotProps.data.imgUrl})` }"
      >{{slotProps.data.title}}</a>
    </Squares>
  </section>
</template>


<script>
import Headline from "@/components/Layout/Headline";
import Squares from "@/components/Layout/Squares";

export default {
  components: {
    Headline,
    Squares
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "我们的推荐",
        desc: "建行云产品系列，祝你上云无忧，轻松运行",
        list: [
          {
            title: "云服务器",
            imgUrl: "https://yun.ccb.com/common/images/recommend_products1.png",
            link: "https://yun.ccb.com/product/cvm"
          },
          {
            title: "弹性负载均衡",
            imgUrl: "https://yun.ccb.com/common/images/recommend_products2.png",
            link: "https://yun.ccb.com/product/elb"
          },
          {
            title: "龙卫士",
            imgUrl: "https://yun.ccb.com/common/images/recommend_products3.png",
            link: "https://yun.ccb.com/product/producthids"
          },
          {
            title: "MPP云数据",
            imgUrl: "https://yun.ccb.com/common/images/recommend_products4.png",
            link: "https://yun.ccb.com/product/productmpp"
          }
        ],
        count: 2
      })
    }
  },
};
</script>


<style lang="less" scoped>
#home-recommend {
  .item {
    display: block;
    margin: 0 auto;
    width: 3.28rem;
    font-size: 0.24rem;
    line-height: 2.04rem;
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>