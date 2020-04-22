<template>
    <select class="select"  @focus="$emit('focus')">
        <option v-for="option in options" :key="option">
            {{option}}
        </option>
    </select>
</template>


<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
select {
    font-family: "微软雅黑";
    margin:100px;
    background: rgba(0,0,0,0);
    width: 249px;
    height: 40px;
    font-size: 18px;
    color: white;
    text-align: center;
    border: 1px #1a1a1a solid;
    border-radius: 5px;
}

option{
    color: black;
    background: #A6E1EC;
    line-height: 20px;
}

select:focus {
    border: 2px #ddd solid;
    box-shadow: 0 0 15px 1px #DDDDDD;
}

option:hover {
    background: #EBCCD1;
}
</style>