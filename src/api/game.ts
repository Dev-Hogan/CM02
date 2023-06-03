// 游戏管理相关接口
import request from "@/utils/request"
import { FuzzySearch, addCreateTime, addUpdateTime } from "@/utils/index"

interface category {
	id?: number | undefined
	typeName: string
	factory: string
	createTime?: string | undefined
	updateTime?: string | undefined
}

// 获取分类管理列表
export const getCategoryList = (params: object) =>
	request.get("category/list", { params })

// 获取单个分类详情
export const getCategoryDetail = (id: string) =>
	request.get(`category/list/${id}`)

// 编辑分类详情
export const editCategoryDetail = (data: category) => {
	addUpdateTime(data)
	request.put(`category/${data.id}`, data)
}

// 新增分类管理
export const addCategory = (data: object) => {
	addCreateTime(data)
	request.post("category", data)
}

// 删除分类管理
export const delateCategory = (id: number) => request.delete(`category/list/${id}`)

// 获取游戏列表
export const getGameList = (params: object) =>
	request.get("game/list", { params })

// 模糊查询游戏列表
export const searchGame = (data: object) => {
	const params = FuzzySearch(data)
	return request.get("game/list", { params })
}
