import Vue from 'vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import mdiVue from 'mdi-vue/v2';
import * as mdijs from '@mdi/js';
import App from './App.vue';
import router from './router';
import store from './store';

import { i18n } from './plugins/i18n';

Vue.use(mdiVue, {
  icons: mdijs,
});

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHYIGVMIOKoUB-CfmsWotuQNAvQ3H1-UI',
  authDomain: 'sk8-eat.firebaseapp.com',
  projectId: 'sk8-eat',
  storageBucket: 'sk8-eat.appspot.com',
  messagingSenderId: '816890879398',
  appId: '1:816890879398:web:b78c2f285b3cf2e4624367',
  measurementId: 'G-C57LZW04JR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
