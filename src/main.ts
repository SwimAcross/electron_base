import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'animate.css';
const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
