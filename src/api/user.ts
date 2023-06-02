// 用户相关接口
import request from "@/utils/request"

// 获取用户列表
export const getUserList = () => request.get("user/list")

export const searchUsers = (params: Object) => request.get("", { params })
