<template>
    <component :is="type.replace(/^[a-z]/, c => c.toUpperCase())" />
</template>


<script>
export default {
    components: {
        Video: () => import('./Video'),
        Audio: () => import('./Audio')
    },

    props: {
        type: {
            type: String,
            default: 'video'
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        },
    }
}
</script>