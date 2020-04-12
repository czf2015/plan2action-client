<template>
  <div class="choice">
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>
</template>

<script>
export default {
    props: {
        choosed: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            checked: this.choosed
        }
    },

    watch: {
        checked() {
            // 
            this.$emit({type: 'choice', message: checked})
        }
    }
};
</script>

<style lang="less" scoped>
.choice{}
</style>