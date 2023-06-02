import { createRouter, createWebHistory } from "vue-router"

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
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
