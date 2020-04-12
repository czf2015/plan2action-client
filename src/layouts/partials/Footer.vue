<template>
  <footer class="footer">
    <ul>
      <li v-for="({ title, children }, idx) in data" :key="idx">
        <h3>{{title}}</h3>
        <p>
          <a v-for="({ title, link }, i) in children" :href="link" :key="i">{{title}}</a>
        </p>
      </li>
    </ul>
    <p>部分产品仅限建行集团内部使用</p>
    <p>© 版权所有中国建设银行</p>
    <p class="flex-container">
      <span>京ICP备13030780号</span>
      <span>京公安备案：110102000450</span>
    </p>
  </footer>
</template>


<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        {
          title: "支持与服务",
          children: [
            { title: "帮助文档", link: "//doc.yun.ccb.com/" },
            {
              title: "联系我们",
              link: "//yun.ccb.com/contactUs/contact_us.html"
            },
            {
              title: "设计咨询",
              link: "//yun.ccb.com/contactUs/contact_us.html"
            },
            {
              title: "专业维护",
              link: "//yun.ccb.com/contactUs/contact_us.html"
            },
            { title: "服务公告", link: "//yun.ccb.com/notice/notice.html" }
          ]
        },
        {
          title: "快速入门",
          children: [
            { title: "控制台", link: "//console.yun.ccb.com/" },
            {
              title: "热门产品",
              link: "//yun.ccb.com/comingSoon/coming_soon.html"
            },
            {
              title: "主推方案",
              link: "//yun.ccb.com/comingSoon/coming_soon.html"
            },
            { title: "新手入门", link: "//doc.yun.ccb.com/" }
          ]
        },
        {
          title: "关注建行",
          children: [
            { title: "建行官网", link: "http://www.ccb.com" },
            { title: "善融商务", link: "http://buy.ccb.com" },
            {
              title: "个人网银",
              link: "http://www.ccb.com/cn/ebank/index.html"
            },
            {
              title: "企业网银",
              link: "http://www.ccb.com/cn/ebank/homepage_corporate.html"
            },
            {
              title: "住房租赁",
              link: "//yun.ccb.com/industryPlatform/detail/zhufangzulin.html"
            }
          ]
        }
      ]
    }
  }
};
</script>


<style lang="less" scoped>
.footer {
  margin-top: 1rem;
  padding: 0.64rem;
  font-size: 0.28rem;
  color: #9094a5;
  background: #34384a;

  ul {
    line-height: 0.68rem;

    li {
      border-bottom: 1px solid;

      h3 {
        font-size: 0.28rem;
        font-weight: normal;
      }

      p {
        a {
          display: inline-block;
          width: 25%;
          color: #fff;
        }
      }
    }
  }

  > p {
    font-size: 0.24rem;
    line-height: 0.64rem;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>