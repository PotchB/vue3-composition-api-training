import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast, { TYPE } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from '@/router'

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

const options = {
  toastDefaults: {
    // ToastOptions object for each type of toast
    [TYPE.ERROR]: {
      timeout: 5000,
      closeButton: false,
    },
    [TYPE.SUCCESS]: {
      timeout: 3000,
      hideProgressBar: true,
    }
  },
};

app.use(router);
app.use(Toast, options);
app.mount('#app');
