import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// eslint-disable-next-line import/no-extraneous-dependencies
import { required, email, min } from '@vee-validate/rules';
// eslint-disable-next-line import/no-extraneous-dependencies
import { localize, setLocale } from '@vee-validate/i18n';
// 直接把中文匯入
// eslint-disable-next-line import/no-extraneous-dependencies
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
// 路由的配置檔案
import router from './router';

// 加入先前的設定檔
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
// 這個語系檔不昂能直接啟用他，所以會強制預設文字為中文
setLocale('zh_TW');

// 註冊元件，要在createAPP(APP)之後、mount之前
const app = createApp(App).use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
