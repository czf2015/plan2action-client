<template>
  <Layout :loading="loading">
    <pre v-html="renderHTML({title: 'richText', content: 'red'})" />
    <ul class="fl-x">
      <li style="background-image: url(/icons/arrow-right.svg); background-repeat: no-repeat; background-size: contain">block</li>
      <li>block</li>
      <li>block</li>
      <li>block</li>
    </ul>
    <component v-for="({id, type, componentName, data}) in list" :key="id || type" :is="componentName" :data="data" />
  </Layout>
</template>


<script>
  import { asyncData } from "@/plugins/axios";
  import adapter from "./adapter";
  // import validator from "./validator";
  import Layout from "@/layouts/default";
  import {ACCOUNT} from '@/apis'

  export default {

    components: {
      Layout,
      Banner: () => import("./business/Banner"),
      Recommend: () => import("./business/Recommend"),
      Products: () => import("./business/Products"),
      Certification: () => import("./business/Certification"),
    },

    data() {
      return {
        list: [],
        loading: false,
      };
    },

    methods: {
      renderHTML({title, content}) {
        return `
        <h1>${title}</h1>
        <p style="color: red">${content}</p>
        `;
      },
    },

    created() {
      ACCOUNT.POST({id: 0, username: 'c0', password: '00'}).then(console.info)
      ACCOUNT.GET().then(console.info).catch(console.warn)
      ACCOUNT.PUT({id: 0, username: 'c0', password: '01'}).then(console.info).catch(console.warn)
      ACCOUNT.GET({username: 'c0'}).then(console.info)
      ACCOUNT.PATCH({id: 0, username: '00'}).then(console.info)
      ACCOUNT.GET({username: '00'}).then(console.info)

      ACCOUNT.POST([{id: 0, username: 'c0', password: '00'}, {id: 1, username: 'c1', password: '01'}]).then(console.info)
      ACCOUNT.GET([{username: 'c1'}, {username: '00'}]).then(console.info)
      ACCOUNT.PUT([{id: 0, username: 'c0', password: '00'}, {id: 0, username: 'c0', password: '00'}]).then(console.info)
      ACCOUNT.GET([{username: 'c0'}, {username: 'c0'}]).then(console.info)
      ACCOUNT.PATCH([{id: 0, username: '00'}, {id: 0, username: '00'}]).then(console.info)
      ACCOUNT.GET([{username: '00'}, {username: '00'}]).then(console.info)

      console.log(ACCOUNT)

      const path = location.pathname.includes("preview")
        ? "/home_preview.json"
        : "/home.json";
      this.loading = true;
      asyncData(path).then(data => {
        this.loading = false;
        this.list = adapter(data.block.root.childBlocks);
      });
    }
  };
</script>
