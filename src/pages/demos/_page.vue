<template>
    <Demo :name="$route.params.page" />
</template>


<script>
    import Demo from '@/demos'

    export default {
        components: {
            Demo
        },
    }
</script>