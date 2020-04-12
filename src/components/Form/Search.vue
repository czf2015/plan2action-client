<template>
    <div class="search">
        <input type="search" id="search" v-model="keywords" @input="active = true" />
        <datalist id="search" v-if="active">
            <option v-for="item in list" value="item" :key="item.id" />
        </datalist>
    </div>
</template>


<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            keywords: '',
            active: false
        }
    },

    methods: {
        search() {
            // 
            this.$emit('search', keywords)
        },
        cancel() {
            this.keywords = ''
            this.active = false
        }
    }
}
</script>


<style lang="less" scoped>
.search {

    >input {

    }
    >input.active
    >datalist {
        >option {

        }
    }
}
</style>