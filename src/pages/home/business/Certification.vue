<template>
  <section id="home-certification">
    <Headline :title="data.title" :desc="data.desc" />
    <Squares :list="data.list" :count="data.count" v-slot="slotProps">
      <a :href="slotProps.data.link">
        <Figure :src="slotProps.data.src" :desc="slotProps.data.desc" />
      </a>
    </Squares>
  </section>
</template>


<script>
import Headline from "@/components/Layout/Headline";
import Squares from "@/components/Layout/Squares";
import Figure from "@/components/Basic/Figure";

export default {
  components: {
    Headline,
    Squares,
    Figure,
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "合规认证",
        desc: "建设安全可靠的云生态环境，提供值得依赖的优质云服务",
        list: [
          {
            src: "https://yun.ccb.com/myNatural/img/iso20000_v2.png",
            desc: "iso2000",
            link: "#"
          },
          {
            src: "https://yun.ccb.com/myNatural/img/iso20000_v2.png",
            desc: "iso2000",
            link: "#"
          },
          {
            src: "https://yun.ccb.com/myNatural/img/iso20000_v2.png",
            desc: "iso2000",
            link: "#"
          },
          {
            src: "https://yun.ccb.com/myNatural/img/iso20000_v2.png",
            desc: "iso2000",
            link: "#"
          }
        ],
        count: 4
      })
    }
  }
};
</script>
