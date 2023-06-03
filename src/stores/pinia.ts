// 因为与路由一起使用会因为路由注册比pinia快而出问题
// 单独导出pinia
import { createPinia } from "pinia"

const pinia = createPinia()

export default pinia