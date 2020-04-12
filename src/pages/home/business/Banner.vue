<template>
  <Carousel :scenes="data.scenes" :current="data.current" v-slot="slotProps">
    <img :src="slotProps.data" width="100%" height="180px" />
  </Carousel>
</template>


<script>
import Carousel from "@/components/Motion/Carousel";

export default {
  components: {
    Carousel
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        scenes: [
          {
            title: "",
            desc: "",
            herfUrl: "",
            images: "https://imagecachexxfb.yun.ccb.com/raw/cba6793909136cf277c94951b5b73d27.png"
          },
          {
            title: "",
            desc: "",
            herfUrl: "",
            images: "https://yun.ccb.com/common/images/index/topBanner/banner_new_1114.jpg"
          },
          {
            title: "对象存储",
            desc: "安全、稳定、海量、便捷、低延迟、低成本的云端存储服务",
            herfUrl: "https://yun.ccb.com/product/productcos",
            images: "https://yun.ccb.com/common/images/index/topBanner/banner-02.png"
          }
        ].map(({ images }) => images),
        current: 0
      })
    }
  }
};
</script>
