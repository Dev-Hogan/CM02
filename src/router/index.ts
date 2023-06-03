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
			{
				path: "categoryGame",
				name: "categoryGame",
				component: () => import("@/views/GameManagement/GameCategory.vue"),
			},
			{
				path: "addCategory/:id",
				name: "addCategory",
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

export default router
