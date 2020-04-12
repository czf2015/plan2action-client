<template>
  <section id="home-products">
    <Headline :title="data.title" :desc="data.desc" />
    <ul>
      <li v-for="(item, idx) in list" @click="(e) => handleClick(e, idx)" :key="idx">
        <details :open="current === idx ? 'open' : false">
          <summary
            :style="{ backgroundImage: `url(${current === idx  ? item.iconHoverUrl : item.iconUrl})` }"
          >
            <span>{{item.title}}</span>
            <div />
          </summary>
          <ul class="content">
            <li
              v-for="({ title, desc, link }, idx2) in item.children"
              :style="{ display: idx2 < 3 || item.fold ? 'block' : 'none' }"
              :key="idx2"
            >
              <h3>{{title}}</h3>
              <p>
                <span>{{cutStr(desc, 24, '...')}}</span>
                <a :href="link">详情</a>
              </p>
              <a :href="link">立即申请</a>
            </li>
            <span
              @click="item.fold = true; $forceUpdate()"
              :style="{ display: item.children.length > 3 && !item.fold ? 'inline-block' : 'none' }"
            >更多产品</span>
          </ul>
        </details>
      </li>
    </ul>
  </section>
</template>


<script>
import Headline from "@/components/Layout/Headline";
import { cutStr } from "@/utils/String";

export default {
  components: {
    Headline
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "我们的云产品",
        desc: "计算、存储、网络、安全、数据库等全栈式产品，助您顺利上云",
        list: [
          {
            title: "计算",
            iconUrl:
              "https://yun.ccb.com/common/images/index/midIcon/icon_%E8%AE%A1%E7%AE%97_normal.png",
            iconHoverUrl:
              "https://yun.ccb.com/common/images/index/midIcon/icon_blue_%E8%AE%A1%E7%AE%97.png",
            children: [
              {
                title: "云服务器",
                link: "https://yun.ccb.com/product/cvm",
                desc:
                  "稳定、安全、弹性、高性能的云端计算服务，实时满足您的多样性业务需求"
              },
              {
                title: "容器服务",
                link: "https://yun.ccb.com/product/tke",
                desc:
                  "稳定、安全、高效、灵活扩展、简单易用的企业级Kubernetes 容器管理平台"
              },
              {
                title: "裸金属服务器",
                link: "https://yun.ccb.com/product/productbms",
                desc:
                  "提供云端独享的高性能、无虚拟化的物理服务器，更适合性能敏感型业务需求"
              },
              {
                title: "裸金属服务器",
                link: "https://yun.ccb.com/product/productbms",
                desc:
                  "提供云端独享的高性能、无虚拟化的物理服务器，更适合性能敏感型业务需求"
              }
            ]
          },
          {
            title: "网络",
            iconUrl:
              "https://yun.ccb.com/common/images/index/midIcon/icon_%E7%BD%91%E7%BB%9C_normal.png",
            iconHoverUrl:
              "https://yun.ccb.com/common/images/index/midIcon/icon_blue_%E7%BD%91%E7%BB%9C.png",
            children: [
              { title: "云服务器", link: "", desc: "" },
              { title: "容器服务", link: "", desc: "" },
              { title: "裸金属服务器", link: "", desc: "" }
            ]
          },
          {
            title: "存储",
            iconUrl:
              "https://yun.ccb.com/common/images/index/midIcon/icon_%E5%AD%98%E5%82%A8_normal.png",
            iconHoverUrl:
              "https://yun.ccb.com/common/images/index/midIcon/icon_blue_%E5%AD%98%E5%82%A8.png",
            children: [
              { title: "云服务器", link: "", desc: "" },
              { title: "容器服务", link: "", desc: "" },
              { title: "裸金属服务器", link: "", desc: "" }
            ]
          }
        ],
        count: 1
      })
    }
  },
  data() {
    return {
      current: 0,
      list: this.data.list.map(item => Object.assign(item, { fold: false }))
    };
  },
  methods: {
    cutStr,
    handleClick(e, idx) {
      if (idx !== this.current) {
        setTimeout(() => {
          this.current = idx;
          document.documentElement.scrollTop += e.clientY - 32;
        });
      }
    }
  }
};
</script>


<style lang="less" scoped>
#home-products {
  color: #9094a5;

  details {
    border-bottom: 0.02rem solid #e6e7ec;

    summary {
      display: flex;
      justify-content: space-between;
      background-repeat: no-repeat;
      background-size: 0.7rem 0.7rem;
      background-position: 0 center;
      outline: none;

      span {
        line-height: 1.36rem;
        padding-left: 1rem;
        font-size: 0.26rem;
      }

      div {
        width: 0.5rem;
        height: 0.5rem;
        background-image: url(/icons/arrow-up.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: transform 0.2s;
        margin: 0.43rem 0.14rem 0.43rem 0;
      }
    }

    .content {
      font-family: PingFangSC-Regular;
      font-size: 0.28rem;
      background: #f6f7fb;
      padding: 0.13rem 0 0.88rem 0;

      li {
        padding: 0.54rem 0 0 0.32rem;

        h3 {
          font-weight: weight;
          color: #222;
          font-size: 0.25rem;
        }

        p {
          display: flex;
          justify-content: space-between;
          line-height: 1.5;
          font-size: 0.25rem;
          margin-top: 0.3rem;

          a {
            display: inline-block;
            margin-right: 0.32rem;
            padding-right: 0.32rem;
            font-size: 0.24rem;
            color: #2f88ff;
            background-image: url(/icons/arrow-right-blue.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: right;
          }
        }

        > a {
          display: inline-block;
          width: 1.8rem;
          text-align: center;
          font-size: 0.26rem;
          line-height: 0.6rem;
          color: #2f88ff;
          border: 0.02rem solid #2f88ff;
          margin-top: 0.24rem;
        }
      }

      > span {
        display: inline-block;
        margin: 0.5rem 0 0 0.32rem;
        padding-right: 0.5rem;
        color: #2f88ff;
        background-image: url(/icons/arrow-down-blue.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
      }
    }
  }

  ::-webkit-details-marker {
    display: none;
  }

  ::-moz-list-bullet {
    font-size: 0;
  }

  details[open] summary {
    span {
      color: #2f88ff;
    }

    div {
      transform: rotate(180deg);
    }
  }
}
</style>