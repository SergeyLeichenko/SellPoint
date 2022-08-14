<template>
  <div id="app">
    <div class="topArrow">
      <a href="" v-scroll-to="'#top'">
        <i class="fas fa-chevron-up"></i>
      </a>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
.fa-chevron-up {
  color: $bg-blue;
  font-size: 22px;
  cursor: pointer;
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 2%;
  bottom: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.45);
  z-index: 1;
  background-color: $bg-body;
  &:hover {
    background-color: $white;
  }
}
</style>
