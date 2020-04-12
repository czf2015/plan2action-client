module.exports = (page, components) => 
`
<template>
    <Layout :loading="loading">
        <component v-for="({id, type, componentName, data}) in list" :key="id || type" :is="componentName" :data="data" />
    </Layout>
</template>


<script>
    import { asyncData } from "@/plugins/axios";
    import adapter from "./adapter";
    // import validator from "./validator";
    import Layout from "@/layouts/default";

    export default {
        components: {
            Layout,
${components.map(componentName => `
            ${componentName}: () => import('./business/${componentName}'),`
).join('')}
        },

        data() {
            return {
            list: [],
            loading: false,
            show: false,
            };
        },

        methods: {
        },

        created() {
            const path = location.pathname.includes("preview")
            ? "/${page}_preview.json"
            : "/${page}.json";
            this.loading = true;
            asyncData(path).then(data => {
            this.loading = false;
            this.list = adapter(data.block.root.childBlocks);
            });
        }
    };
</script>

`