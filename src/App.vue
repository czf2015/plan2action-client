<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App"
};
</script>


<style>
@import "/css/Reset.css";
@import "/css/Layout.css";
@import "/css/Animate.css";
@import "/css/Themes.css";
@import "/css/Shapes.css";
@import "/css/Variables.css";

html {
  font-size: 50px;
}

body {
  font-size: 0.14rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
