<template>
    <Monaco :width="width" :height='height' />
</template>


<script>
import Monaco from 'vue-monaco-editor'

export default {
    components: {
        Monaco,
    },

    props: {
        width: {
            type: Number,
            default: 750
        },
        height: {
            type: Number,
            default: 300
        },
        language: {
            type: String,
            default: 'typescript'
        }
    }
}
</script>