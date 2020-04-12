<template>
    <ul class="parallel">
        <li v-for="(item, idx) in list" :style="{width: `${100 / list.length}%`}" :key="idx">
            <slot :data="item" />
        </li>
    </ul>
</template>


<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>


<style lang="less" scoped>
.parallel {
    width: 100%;

    >li {
        display: inline-block;
    }
}
</style>