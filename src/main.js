import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './router';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon).use(router)
    .mount('#app')
// createApp(App)
//     .component("font-awesome-icon", FontAwesomeIcon)
//     .mount('#app')
// createApp(App).use(router).mount("#app");

import './assets/main.css'

// createApp(App).mount('#app')
