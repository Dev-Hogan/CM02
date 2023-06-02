// 游戏管理相关接口
import request from "@/utils/request"

// 获取分类管理列表
export const getCategoryList = (params:object) => request.get("category/list", { params})