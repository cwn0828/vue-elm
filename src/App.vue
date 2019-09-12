<template>
  <div id="app">
    <!-- <firstHeader /> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <svgIcon />
  </div>
</template>
<script>
import svgIcon from "./components/common/svg";
export default {
  name: "App",
  components: {
    svgIcon
  }
};
</script>
<style>
@import "./style/app.css";
@import "./style/media.css";
html {
  font-size: 23.4px;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
