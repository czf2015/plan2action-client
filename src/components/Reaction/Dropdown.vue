<template>
  
</template>

<script>
export default {
    props: {
        trigger: {
            type: String,
            default: 'hover'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        handleClick() {
            this.$emit('click')
        }
    }

}
</script>

<style>

</style>