<template>
	<div class="game-management">
		<client-header title="游戏管理" sub-title="游戏管理" />
	</div>
	<div class="game-search">
		<el-form inline :model="form" ref="gameForm">
			<el-form-item prop="gameName">
				<el-input v-model="form.gameName" placeholder="请输入游戏名称" />
			</el-form-item>
			<el-form-item prop="classify">
				<el-select v-model="form.classify" class="m-2">
					<el-option
						v-for="item in classOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</el-form-item>
			<el-form-item prop="state">
				<el-select v-model="form.state" class="m-2">
					<el-option
						v-for="item in stateOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</el-form-item>
			<el-form-item prop="recommend">
				<el-select v-model="form.recommend" class="m-2">
					<el-option
						v-for="item in recommendOptions"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="userSearch">筛选</el-button>
				<el-button @click="restForm">清空</el-button>
			</el-form-item>
		</el-form>
	</div>
	<div class="game-table">
		<el-table
			:data="gameTable"
			:cell-style="{ textAlign: 'center' }"
			:header-cell-style="{
				'text-align': 'center',
				'background-color': '#f2f2f2',
			}"
			style="width: 100%"
		>
			<el-table-column prop="id" label="ID" />
			<el-table-column prop="src" label="游戏图片">
				<template #default="{ row }">
					<img :src="row.src" alt="游戏图片" />
				</template>
			</el-table-column>
			<el-table-column prop="gameName" label="游戏名称" />
			<el-table-column prop="classify" label="所属分类" />
			<el-table-column prop="price" label="零售价" />
			<el-table-column prop="myRecovery" label="我家回收减" />
			<el-table-column prop="itRecovery" label="其他回收减" />
			<el-table-column prop="label" label="标签" />
			<el-table-column prop="notes" label="备注" />
			<el-table-column prop="monthlySales" label="月销" />
			<el-table-column prop="state" label="上架状态" />
			<el-table-column prop="recommend" label="是否推荐" />
			<el-table-column prop="createTime" label="创建时间" />
			<el-table-column prop="updateTime" label="更新时间" />
			<el-table-column prop="address" label="操作">
				<el-button>编辑</el-button> </el-table-column
			>>
		</el-table>
	</div>
	<div class="example-pagination-block pagination">
		<el-pagination
			layout="prev, pager, next"
			:total="+total"
			v-model:current-page="currentPage"
			@current-change="handleCurrentChange"
		/>
	</div>
</template>

<script setup lang="ts">
import { getGameList, searchGame } from "@/api/game"
import { reactive, ref } from "vue"
const form = ref({
	gameName: "",
	classify: "",
	state: "",
	recommend:''
})
const gameForm = ref()
const classOptions = reactive([
	{ label: "所属分类", value: "" },
	{ label: "switch", value: "Switch" },
	{ label: "PS4", value: "PS4" },
	{ label: "PS5", value: "PS5" },
])
const stateOptions = reactive([
	{ label: "游戏状态", value: "" },
	{ label: "已上架", value: "已上架" },
	{ label: "已下架", value: "已下架" },
	{ label: "即将发售", value: "即将发售" },
])
const recommendOptions = reactive([
	{ label: "是否推荐", value: "" },
	{ label: "是", value: "是" },
	{ label: "否", value: "否" },
])
type gameTable = {
	id: number
	src: string
	gameName: string
	classify: string
	price: string
	myRecovery: string
	itRecovery: string
	label: string
	notes: string
	monthlySales: string
	state: string
	recommend: string
	recovery: string
	createTime: string
	updateTime: string
}[]
let gameTable = ref<gameTable>([])
let page = ref<number>(1)
let limit = ref<number>(5)
const currentPage = ref(1)
let total = ref(0)
const getList = async () => {
	const res = await getGameList({
		_page: page.value,
		_limit: limit.value,
	})
	total.value = res.headers['x-total-count']
	console.log("游戏列表", res)
	gameTable.value = res.data as unknown as gameTable
}
getList()
// 分页
const handleCurrentChange = (val: number) => {
	console.log("当前页", val)
	page.value = val
	getList()
}
const userSearch = async () => {
	const res = await searchGame(form.value)
	gameTable.value = res.data as unknown as gameTable
}
const restForm = () => {
	gameForm.value.resetFields()
}
</script>

<style lang="scss" scoped>
$img: 50px;
img {
	width: $img;
	height: $img + 20px;
}
:deep(.el-form-item) {
	margin-right: 10px;
}
:deep(button){
	width: 70px;
}
.pagination {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}
</style>
