import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue'
import App from './App.vue'
import { store } from './components/store';

createApp(App).use(store).mount('#app')
import '@fortawesome/fontawesome-free/js/all.js';
import "bootstrap/dist/js/bootstrap.js";
