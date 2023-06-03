<template>
	<div class="category-header">
		<client-header title="游戏管理" sub-title="分类管理" />
	</div>
	<div class="category-add">
		<el-button type="primary" @click="$router.push('/addCategory')"
			>新增</el-button
		>
	</div>
	<div class="category-table">
		<el-table
			:data="categoryTable"
			:cell-style="{ textAlign: 'center' }"
			:header-cell-style="{
				'text-align': 'center',
				'background-color': '#f2f2f2',
			}"
			style="width: 100%"
		>
			<el-table-column prop="id" label="ID" />
			<el-table-column prop="typeName" label="分类名称" />
			<el-table-column prop="factory" label="所属厂家" />
			<el-table-column prop="createTime" label="创建时间" />
			<el-table-column prop="updateTime" label="更新时间" />
			<el-table-column label="操作" #default="{ row }">
				<el-button
					type="primary"
					@click="$router.push(`/addCategory/${row.id}`)"
					>编辑</el-button
				>
				<el-button type="warning" @click="delCategory(row.id)">删除</el-button>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup lang="ts">
import { getCategoryList, delateCategory } from "@/api/game"
import { ref } from "vue"
type categoryTable = {
	id: number
	typeName: string
	factory: string
	createTime: string
	updateTime: string
}[]
let categoryTable = ref<categoryTable>([])
let page = ref<number>(1)
let limit = ref<number>(10)

const getList = async () => {
	const res = await getCategoryList({ _page: page.value, _limit: limit.value })
	console.log('列表加载', res);
	
	categoryTable.value = res as unknown as categoryTable
}
getList()
	

const delCategory = async (id: number) => {
	await delateCategory(id)
	getList()
}
</script>

<style lang="scss" scoped>
.category-add {
	:deep(button) {
		width: 90px;
	}
}
.category-table {
	margin-top: 20px;
}
</style>
