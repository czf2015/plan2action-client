module.exports = (component, partials) => {
    const cls = component.replace(/[A-Z]/, c => c.toLowerCase())

    if (typeof partials === 'undefined') {
        return (
`<template>
    <div class="${cls}">
    </div>
</template>


<script>
    import adapter from "./adapter";

    export default {
        props: {
        },

        data() {
            return {
            }
        },

        mounted() {
        }
    }
</script>


<style scoped>
    .${cls} {
    }
</style>`
        )
    } else {
        return (
`<template>
    <dic class="${cls}">
        <component v-for="({id, type, componentName, data}) in list" :key="id || type" :is="componentName" :data="data" />
    </dic>
</template>


<script>
    import adapter from "./adapter";

    export default {
        components: {
${partials.map(partial => typeof partial === 'string'
    ? `
            ${partial}: () => import('./partials/${partial}'),`
    : `
            ${partial.name}: () => import('./partials/${partial.name}'),`
).join('')}
        },

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                list: adapter(this.data)
            };
        },

        methods: {
        },

        mounted() {
        }
    };
</script>


<style scoped>
    .${cls} {
    }
</style>`
        )
    }
}
