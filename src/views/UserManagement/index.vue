<template>
	<div class="user-header">
		<client-header title="用户管理" sub-title="用户列表" />
	</div>
	<div class="user-main">
		<div class="user-search">
			<el-form inline :model="form">
				<el-form-item>
					<el-input v-model="form.query" placeholder="请输入OpenID或者昵称" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="userSearch">筛选</el-button>
					<el-button @click="restForm">清空</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="user-table">
			<el-table
				:data="userTable"
				:cell-style="{ textAlign: 'center' }"
				:header-cell-style="{ 'text-align': 'center' }"
				style="width: 100%"
			>
				<el-table-column prop="id" label="ID" />
				<el-table-column prop="type" label="类型" />
				<el-table-column prop="openID" label="OpenID" />
				<el-table-column prop="nickname" label="昵称" />
				<el-table-column prop="sex" label="性别" />
				<el-table-column prop="avatar" label="头像" />
				<el-table-column prop="address" label="地区" />
			</el-table>
		</div>
		<div class="example-pagination-block pagination">
			<el-pagination
				layout="prev, pager, next"
				:total="50"
				v-model:current-page="currentPage"
				@current-change="handleCurrentChange"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { getUserList, searchUsers } from "@/api/user"
import { reactive, ref } from "vue"
const form = reactive({
	query: "",
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
let userTable = ref<userTable>([])
let page = ref<Number>(1)
let limit = ref<Number>(5)
const currentPage = ref(1)

// 全部列表
const getList = async () => {
	const res = await getUserList({ _page: page.value, _limit: limit.value })
	userTable.value = res as unknown as userTable
}
getList()
// 分页
const handleCurrentChange = (val: number) => {
	console.log("当前页", val)
	page.value = val
	getList()
}

const judgeSearch = () => {
	const reg = /[U4e00-u9fa5]+/g
	const flag = reg.test(form.query)
	let newForm: { openID?: string; nickname?: string } = {}
	if (flag) {
		newForm.openID = form.query
	} else if (!flag) {
		newForm.nickname = form.query
	}

	if (form.query.trim() === "") {
		getList()
		return
	}
	console.log("判断openID,昵称", newForm)
	return newForm
}

const userSearch = async () => {
	const searchForm = judgeSearch()
	if (searchForm) {
		const res = await searchUsers(searchForm)
		userTable.value = res as unknown as userTable
	}
}
const restForm = () => {
	form.query = ""
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
	.user-table {
		text-align: center;
	}
}
.pagination {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}
</style>
