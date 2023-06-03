// 游戏管理相关接口
import request from "@/utils/request"
import { FuzzySearch, addCreateTime } from "@/utils/index"

interface category {
	id: number
	typeName: string
	factory: string
	createTime: string
	updateTime: string
}

// 获取分类管理列表
export const getCategoryList = (params:object) => request.get("category/list", { params})

// 获取单个分类详情
export const getCategoryDetail = (id: string) => request.get(`category/list/${id}`)

// 编辑分类详情
export const editCategoryDetail = (data: category) => {
    
    request.put(`category/${data.id}`)
}

// 新增分类管理
export const addCategory = (data: object) => {
    addCreateTime(data)
    request.post("category", data)
}

// 编辑分类管理

// 获取游戏列表
export const getGameList = (params: object) => request.get("game/list", { params })

// 模糊查询游戏列表
export const searchGame = (data: object) => {
	const params = FuzzySearch(data)
	return request.get("game/list", { params })
}