<template>
    <component :is="type.replace(/^[a-z]/, c => c.toUpperCase())" />
</template>


<script>
export default {
    components: {
        Post: () => import('./Post'),
        Profile: () => import('./Profile'),
        Expand: () => import('./Expand'),
    },

    props: {
        type: {
            type: String,
            default: 'Expand'
        }
    }
}
</script>
