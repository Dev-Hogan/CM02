// 用户相关接口
import request from "@/utils/request"
import { FuzzySearch } from "@/utils/index"

// 获取用户列表
export const getUserList = (params: Object) => request.get("user/list", { params })

// 模糊查询 openID 或 昵称
export const searchUsers = (data: Object) => {
	const params = FuzzySearch(data)
	return request.get("user/list", { params })
}
