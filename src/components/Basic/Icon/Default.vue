<template>
    <span class="icon" :style="{ backgroundImage: `url(${src})` }" />
</template>


<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>