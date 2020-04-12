<template>
  <header class="header">
    <a href="/">
      <Icon src="/icons/logo.png" width="2.75rem" />
    </a>
    <div>
      <a href="#">
        <Icon src="/icons/login.png" />
      </a>
      <Menu />
    </div>
  </header>
</template>


<script>
import Menu from "@/components/Navigation/Menu";
import Icon from "@/components/Basic/Icon";

export default {
  components: {
    Menu,
    Icon
  }
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0.32rem;
  font-size: 0.24rem;
}
</style>
