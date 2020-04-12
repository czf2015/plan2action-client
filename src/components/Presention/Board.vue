<template>
  <div class="board">
    <h3 class="title">{{title}}</h3>
    <p class="content">{{content}}</p>
    <Marks />
  </div>
</template>

<script>
import Marks from './Marks'

export default {
    components: {
        Marks,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less" scoped>
.board {
    .title{

    }
    .content {

    }
}
</style>