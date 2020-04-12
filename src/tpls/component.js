module.exports = component => {
    const cls = component.replace(/[A-Z]/, c => c.toLowerCase())
    return (
`<template>
    <div class="${cls}">
    </div>
</template>


<script>
    // import from ''

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
}
