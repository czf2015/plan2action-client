module.exports = (page, component) => {
    const id = `${page}-${component.replace(/[A-Z]/, c => c.toLowerCase())}`
    return (
`<template>
    <section id="${id}">
    </section>
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
#${id} {
}
</style>`
    )
}