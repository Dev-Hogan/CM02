// 权限管理
import router from "@/router"
import { useStore } from "@/stores"

let store: any = null

router.beforeEach(async (to, from, next) => {
	if (store === null) {
		store = useStore()
	}
	
	const token = store.token
	console.log("获取的token", token)

	if (to.path !== "/login" && !token) {
		console.log("守卫", 111)

		next("/login")
		return
	}
	console.log("路由守卫", 222)
	if (to.path === '/login' && token) {
		next('/')
	}
	next()
})
