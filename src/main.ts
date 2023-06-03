import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import { createPinia } from "pinia"
import "normalize.css/normalize.css"
import "@/permission"
// import './styles/element/index.scss';
const pinia = createPinia()
createApp(App).use(pinia).use(router).mount("#app")
