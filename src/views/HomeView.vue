<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- v-form標籤改為Form -->
    <Form v-slot="{ errors, values, validate }" @submit="onSubmit">
      {{errors}} {{ values }}

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
                  placeholder="請輸入 Email" rules="email|required"
                  :class="{'is-invalid':errors['email']}"
                  v-model="user.email"></Field>
        <!-- 這裡的<error-message>要加上name，以對應到v-field的name欄位 -->
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>
      <button class="btn btn-primary" type="submit">Submit</button>
  </Form>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line import/no-unresolved
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
