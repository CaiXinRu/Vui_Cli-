<template>
  <nav>
    <!-- 導覽列 -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
    {{ title }}
  <!-- 路由生成的主要區塊 -->
  <router-view/>
  <button type="button" class="btn btn-primary">Primary</button>
</template>

<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>

<style lang="scss">
@import "bootstrap"
</style>
