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
		<div class="user-table">
			<el-table :data="userTable" style="width: 100%">
				<el-table-column prop="id" label="ID" />
				<el-table-column prop="type" label="类型" />
				<el-table-column prop="openID" label="OpenID" />
				<el-table-column prop="nickname" label="昵称" />
				<el-table-column prop="sex" label="性别" />
				<el-table-column prop="avatar" label="头像" />
				<el-table-column prop="address" label="地区" />
			</el-table>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { getUserList } from "@/api/user"
import { reactive } from "vue"
const form = reactive({
	nickName: "",
})
type userTable = {
	id: number
	type: string
	openID: string
	nickname: string
	sex: string
	avatar: string
	address: string
}[]
let userTable: userTable = reactive([])
// 全部列表
const getList = async () => {
	const res = await getUserList()
	console.log("列表", res)
	userTable.push(...(res as unknown as userTable))
	console.log("新列表", userTable)
}
getList()

const userSearch = () => {
	console.log("查找", form)
}
const restForm = () => {
	console.log("清空表单")
}
</script>

<style lang="scss" scoped>
.user-search {
	:deep(button) {
		width: 80px;
	}
	:deep(.el-input__wrapper) {
		width: 300px;
	}
}
</style>
