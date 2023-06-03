// 用户相关接口
import request from "@/utils/request"
import { FuzzySearch } from "@/utils/index"

// 用户登录
export const login = (data: any) => request.post("/login", data)

// 获取用户列表
export const getUserList = (params: object) => request.get("user/list", { params })

// 模糊查询 openID 或 昵称
export const searchUsers = (data: object) => {
	const params = FuzzySearch(data)
	return request.get("user/list", { params })
}
