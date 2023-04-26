<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 加入Card標籤 -->
    <Card></Card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Card,
  },
};
</script>
