// json-server接口转化函数
interface Data {
	[key: string]: any
}
// 模糊查询
export const FuzzySearch = (data: Data): { [key: string]: any } => {
	let params:Data = {}
	let value: any

	for (let key in data) {
		value = data[key]
		key = `${key}_like`
		params[key] = value
	}

	return params
}