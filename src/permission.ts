// 权限管理
import router from "@/router"
import { useStore } from "@/stores"
import pinia from '@/stores/pinia';

const store = useStore(pinia)

router.beforeEach((to, from, next) => {
	const token = store.token
	if (to.path !== "/login" && !token) {
		console.log("守卫", 111)

		next("/login")
		return
	}
    console.log('路由守卫', 222);
    
	next()
})
