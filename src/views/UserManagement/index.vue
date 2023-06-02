<template>
	<div class="user-header">
		<client-header title="用户管理" sub-title="用户列表" />
	</div>
	<div class="user-main">
		<div class="user-search">
			<el-form inline :model="form">
				<el-form-item>
					<el-input
						v-model="form.nickName"
						placeholder="请输入OpenID或者昵称"
					/>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="userSearch">筛选</el-button>
					<el-button @click="restForm">清空</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
const form = reactive({
	nickName: "",
})
const userSearch = () => {
	console.log("查找", form)
}
const restForm = () => {
	console.log("清空表单")
}
</script>

<style lang="scss" scoped>
// .user-search {
// 	display: flex;
// }
</style>
