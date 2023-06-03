import { defineStore } from "pinia"
import { login } from "@/api/user"
import { setToken, getToken } from "@/utils/auth"
import bcrypt from "bcryptjs"

interface loginForm {
    email: string,
    password: string
}

export const useStore = defineStore("main", {
	state: () => {
		return {
			token: getToken(),
		}
	},
	actions: {
		async Login(form: loginForm) {
			const salt = bcrypt.genSaltSync(10)
			const res = await login({
				...form,
				password: bcrypt.hashSync(form.password, salt),
			})
			this.token = res.data.accessToken
			setToken(this.token as string)
		},
	},
})
