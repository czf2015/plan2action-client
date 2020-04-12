<template>
  <div class="board">
    <h3 class="title">{{title}}</h3>
    <p class="content">{{content}}</p>
    <Marker />
  </div>
</template>

<script>
import Marker from './Marker'

export default {
    components: {
        Marker,
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