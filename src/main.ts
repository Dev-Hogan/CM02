import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import { createPinia } from "pinia"
import 'normalize.css/normalize.css';
// import './styles/element/index.scss';
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app")
