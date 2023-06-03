<template>
	<div class="addGame-header">
		<client-header title="游戏管理" sub-title="分类管理" />
	</div>
	<div class="add-form">
		<el-form :model="form" ref="addForm" :rules="rules">
			<el-form-item prop="typeName" label="分类名称">
				<el-input v-model="form.typeName" placeholder="请输入游戏分类名称" />
			</el-form-item>
			<el-form-item prop="factory" label="所属厂商">
				<el-radio-group v-model="form.factory">
					<el-radio label="任天堂" />
					<el-radio label="索尼PlayStation" />
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="save">保存</el-button>
				<el-button @click="restForm">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { addCategory, getCategoryDetail, editCategoryDetail } from "@/api/game"
import { useRoute, useRouter } from "vue-router"
import { reactive, ref } from "vue"
type form = {
	typeName: string
	factory: string
	createTime?: string
	updateTime?: string
	id?: number
}
const form = ref<form>({
	typeName: "",
	factory: "任天堂",
})
const addForm = ref()
const rules = reactive({
	typeName: [
		{ required: true, message: "请输入游戏分类名称", trigger: "blur" },
	],
})
// 判断新增/编辑
const { params } = useRoute()
const router = useRouter()
const checkAddEdit = async () => {
	console.log("路由参数", params.id)
	if (params.id) {
		form.value = (await getCategoryDetail(
			params.id as string
		)) as unknown as form
		console.log(form.value)
	}
}
checkAddEdit()
const save = async () => {
	await addForm.value.validate()
	if (!params.id) {
		const res = await addCategory(form.value)
		console.log("新增保存", form.value, res)
		router.back()
	} else {
		const res = await editCategoryDetail(form.value)
		console.log("修改后的分类", res)
		router.back()
	}
}
const restForm = () => {
	addForm.value.resetFields()
	router.back()
}
</script>

<style lang="scss" scoped>
.add-form {
	width: 400px;
}
:deep(button) {
	width: 160px;
	margin-right: 30px;
}
</style>
