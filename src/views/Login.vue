<template>
	<div class="login-container">
		<div class="login-form">
			<div class="login-form-header">
				<h2>后台管理系统</h2>
				<p>欢迎您的到来</p>
			</div>
			<el-form :model="form">
				<el-form-item>
					<el-input
						v-model="form.email"
						type="email"
						placeholder="邮箱或用户名"
					/>
				</el-form-item>
				<el-form-item>
					<el-input
						v-model="form.password"
						type="password"
						placeholder="密码"
					/>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						class="login-form-operation"
						@click="loginForm"
						>登录</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "@/store"
const form = reactive({
	email: "",
	password: "",
})
const router = useRouter()
const store = useStore()
const loginForm = async () => {
	console.log("登录", form)
	store.Login(form)
	console.log('pinia', store.token);
	router.push('/')
}
</script>

<style lang="scss" scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-image: url(../assets/login-1.jpg);
	background-repeat: no-repeat;
	background-size: cover;
}

.login-form {
	display: flex;
	position: relative;
	width: 340px;
	height: 320px;
	flex-direction: column;
	padding: 40px;
	text-align: center;
	z-index: 1;
	background: inherit;
	border-radius: 18px;
	overflow: hidden;
	&::before {
		content: "";
		position: absolute;
		top: -10px;
		left: -10px;
		width: calc(100% + 20px);
		/* + 两边各有一个空格  否则 无效*/
		height: calc(100% + 20px);
		background: inherit;
		box-shadow: 0 0 0 200px rgba(255, 255, 255, 0.2) inset;
		z-index: -1;
		filter: blur(6px);
		overflow: hidden;
	}
	&-header {
		h2 {
			font-size: 36px;
			font-weight: bold;
			color: #424242;
		}
		p {
			color: #666666;
		}
	}
	::v-deep {
		input,
		button {
			border: none;
			border-radius: 4px;
			height: 40px;
			color: #fff;
		}
		.el-input__wrapper {
			background-color: rgba(178, 197, 221, 0.3);
		}
		input::placeholder {
			color: #fff;
		}
		// input:focus {
		// 	background-color: rgba(253, 254, 255, 0.793);
		// 	color: black;
		// }
		// button {
		// 	background-color: #fc8874;
		// 	&:hover {
		// 		background-color: #e46b55;
		// 	}
		// }
	}
	::v-deep &-operation {
		flex-grow: 1;
		width: 100%;
	}
}

// ::v-deep .el-input__wrapper.is-focus {
// 	padding-left: 0;
// 	padding-right: 0;
// }
</style>
