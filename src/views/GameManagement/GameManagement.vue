<template>
	<div class="game-management">
		<client-header title="游戏管理" sub-title="游戏管理" />
	</div>
	<div class="game-search">
		<el-form inline :model="form">
			<el-form-item>
				<el-input v-model="form.query" placeholder="请输入游戏名称" />
			</el-form-item>
			<el-form-item>
				<el-dropdown>
					<el-button>
						所属分类<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</el-button>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>Action 1</el-dropdown-item>
							<el-dropdown-item>Action 2</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
				<el-dropdown>
					<el-button>
						所属分类<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</el-button>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>Action 1</el-dropdown-item>
							<el-dropdown-item>Action 2</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
				<el-dropdown>
					<el-button>
						所属分类<el-icon class="el-icon--right"><arrow-down /></el-icon>
					</el-button>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>Action 1</el-dropdown-item>
							<el-dropdown-item>Action 2</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="userSearch">筛选</el-button>
				<el-button @click="restForm">清空</el-button>
			</el-form-item>
		</el-form>
	</div>
	<div class="game-table">
		<el-table
			:cell-style="{ textAlign: 'center' }"
			:header-cell-style="{
				'text-align': 'center',
				'background-color': '#f2f2f2',
			}"
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
		<el-pagination layout="prev, pager, next" :total="50" />
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { ArrowDown } from "@element-plus/icons-vue"
const form = reactive({
	query: "",
})
// const gameTable =[]
const userSearch = async () => {}
const restForm = () => {
	form.query = ""
	console.log("清空表单")
}
</script>

<style scoped></style>
