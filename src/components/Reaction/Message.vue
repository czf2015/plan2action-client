<template>
  <div class="message" :class="theme" v-show="!hidden">{{message}}</div>
</template>


<script>
export default {
  props: {
    theme: {
      type: String,
      default: "default"
    },
    message: {
      type: String,
      default: "default"
    },
    hidden: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.message {
  position: relative;
  margin: 5px;
  width: 130px;
  line-height: 40px;
  text-align: center;
  color: white;
  border-radius: 15px;
}

/*小三角*/
::before {
  position: absolute;
  bottom: -30px;
  left: 40px;
  content: "";
  width: 0;
  height: 0;
  border: 15px solid;
}

.default {
  background-color: blue;
}
.default::before {
  border-color: blue transparent transparent transparent;
}

.success {
  background-color: blue;
}
.success::before {
  border-color: green transparent transparent transparent;
}

.warn {
  background-color: yellow;
}
.warn::before {
  border-color: yellow transparent transparent transparent;
}

.error {
  background-color: red;
}
.error::before {
  border-color: red transparent transparent transparent;
}
</style>