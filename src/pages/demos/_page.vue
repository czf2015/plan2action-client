<template>
    <Demo :name="$route.params.page" />
</template>


<script>
    import Demo from '@/demos'
    // import image from 'https://cambrian-images.cdn.bcebos.com/ac86102cf9a621feb4dad62af69923ae_1540266670849636.jpeg'

    export default {
        components: {
            Demo
        },

        created() {
            // console.log(image)
        }
    }
</script>