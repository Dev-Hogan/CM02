import { createRouter, createWebHistory } from "vue-router"
import { useStore } from "@/src/stores"
const routes = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login.vue"),
	},
	{
		path: "/",
		name: "home",
		redirect: "/userList",
		component: () => import("@/layout/index.vue"),
		children: [
			{
				path: "userList",
				name: "userList",
				component: () => import("@/views/UserManagement/index.vue"),
			},
			{
				path: "categoryGame",
				name: "categoryGame",
				component: () => import("@/views/GameManagement/GameCategory.vue"),
			},
			{
				path: "addCategory",
				name: "addCategory",
				component: () => import("@/views/components/add-edit-category.vue"),
			},
			{
				path: "addCategory/:id",
				name: "addCategory-detail",
				component: () => import("@/views/components/add-edit-category.vue"),
			},
			{
				path: "gameManagement",
				name: "gameManagement",
				component: () => import("@/views/GameManagement/GameManagement.vue"),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// const store = useStore()
// router.beforeEach((to, from, next) => {
// 	const token = store.token
// 	if (to.path !== "/login" || !token) {
// 		console.log("守卫", 111)

// 		next("/login")
// 		return
// 	}

// 	next()
// })

export default router
