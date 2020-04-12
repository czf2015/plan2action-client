<template>
    <component :is="type.replace(/^[a-z]/, c => c.toUpperCase())" />
</template>

<script>
export default {
    components: {
        Bottom: () => import('./Bottom')
    },

    props: {
        type: {
            type: String,
            default: 'bottom'
        }
    }
}
</script>

<style>

</style>