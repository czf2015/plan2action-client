<template>
  <form>
    <fieldset class="todo-list">
      <legend class="todo-list__title">{{title}}</legend>
      <label v-for="({name, id, value}) in list" :key="id" class="todo-list__label">
        <input type="checkbox" :name="name" :id="id" />
        <i class="check"></i>
        <span>{{value}}</span>
      </label>>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "My Special Todo List"
    },
    list: {
      type: Array,
      default: () => [
        {
          name: "",
          id: "1",
          value: "Make awesome CSS animation"
        },
        {
          name: "",
          id: "2",
          value: "Watch awesome bangumi"
        },
        {
          name: "",
          id: "3",
          value: "Encounter awesome people"
        },
        {
          name: "",
          id: "4",
          value: "Be an awesome man"
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
// color scheme: https://coolors.co/e63946-585b57-7b9fa1-264456-0b1420
@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: #1a1e23;
// }
form {
    font-size: .32rem;
}

.todo-list {
  display: flex;
  flex-direction: column;
  padding: 0 75px 10px 30px;
  background: #162740;
  border: transparent;

  .todo-list__title {
    padding: 3px 6px;
    color: #f1faee;
    background-color: #264456;
  }

  .todo-list__label {
    display: flex;
    align-items: center;
    margin: 40px 0;
    font-size: 24px;
    font-family: Lato, sans-serif;
    color: #f1faee;
    cursor: pointer;

    input[type="checkbox"] {
      opacity: 0;
      appearance: none;

      & + .check {
        position: absolute;
        width: 25px;
        height: 25px;
        border: 2px solid #f1faee;
        transition: 0.2s;
      }

      &:checked + .check {
        width: 25px;
        height: 15px;
        border-top: transparent;
        border-right: transparent;
        transform: rotate(-45deg);
      }

      & ~ span {
        position: relative;
        left: 40px;
        white-space: nowrap;
        transition: 0.5s;

        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: #f1faee;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s;
        }
      }

      &:checked ~ span {
        color: #585b57;

        &::before {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
}
</style>