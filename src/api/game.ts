// 游戏管理相关接口
import request from "@/utils/request"
import { FuzzySearch } from "@/utils/index"

// 获取分类管理列表
export const getCategoryList = (params:object) => request.get("category/list", { params})

// 获取游戏列表
export const getGameList = (params: object) => request.get("game/list", { params })

// 模糊查询游戏列表
export const searchGame = (data: object) => {
	const params = FuzzySearch(data)
	return request.get("game/list", { params })
}