// 存储登录状态
import { Cookies} from "typescript-cookie"

const TOKENKEY = 'cms-token'

export const getToken = () => Cookies.get(TOKENKEY)

export const setToken = (token: string|undefined) => Cookies.set(TOKENKEY, token)

export const removeToken = () => Cookies.remove(TOKENKEY)