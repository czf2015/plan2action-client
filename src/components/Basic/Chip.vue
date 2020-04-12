<template>
    <div class="chip">
        <slot />
    </div>
</template>


<script>
    export default {
        props: {
            minWidth: {
                type: String,
                default: '50px'
            },
        }
    }
</script>


<style scoped>
    .chip {
        display: inline-block;
        margin: 5px;
        border-radius: 50% 50%;
        min-width: 20px;
    }
</style>