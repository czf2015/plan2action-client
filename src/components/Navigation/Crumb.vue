<template>
  
</template>

<script>
export default {
    props: {
        separator: {
            type: String,
            default: ''
        },
        routes: {
            type: Array,
            default: () => []
        },
        params: {
            type: Object,
            default: () => ({})
        },
    }
}
</script>

<style>

</style>