<template>
  <div class="note">
    <pre :id="id" class="note-content" :contenteditable="editable" :style="styles" />
    <div class="note-control">
      <button class="edit" v-show="!editable" @click="editable = true">编辑</button>
      <button class="remove" v-show="editable" @click="remove">删除</button>
      <button class="save" v-show="editable" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styles: {
      type: Object,
      default: () => ({
        backgroundColor: "yellow"
      })
    }
  },

  data() {
    return {
      message: "",
      editable: false,
      id: `${Math.random()}`
    };
  },

  methods: {
    save() {
      //
      this.editable = false;
      alert(document.getElementById(this.id).innerText);
    },
    remove() {
      alert("remove?");
      //
    }
  }
};
</script>

<style lang="less" scoped>
.note {
  position: absolute;
  display: inline-block;

  .note-content {
    max-width: 375px;
    min-width: 275px;
    min-height: 80px;
    font-size: 0.24rem;
    line-height: 1.25;
    letter-spacing: 0.05em;
    border: 1px solid;
    border-radius: 6px;
  }

  .note-control {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    button {
      margin: 15px;
      padding: 10px 18px;
      font-size: 0.24rem;
      letter-spacing: 0.25em;
      text-align: center;
      color: white;
      border: 1px solid;
      border-radius: 6px;
    }

    .edit {
      background-color: blue;
    }

    .save {
      background-color: green;
    }

    .remove {
      background-color: red;
    }
  }
}
</style>