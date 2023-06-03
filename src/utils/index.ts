// json-server接口转化函数
interface Search {
	[key: string]: any
}
interface category {
	createTime?: string,
	updateTime?: string|null
}
// 模糊查询
export const FuzzySearch = (data: Search): { [key: string]: any } => {
	let params: Search = {}
	let value: any

	for (let key in data) {
		value = data[key]
		key = `${key}_like`
		params[key] = value
	}

	return params
}

// 格式化时间
const formatDate = (data: Date) => {
	const year = data.getFullYear()
	const month = data.getMonth() + 1
	const day = data.getDate()
	const hour = data.getHours()
	const minute = data.getMinutes()
	const second = data.getSeconds()
	const zeroFill = [month, day, hour, minute, second]
	const fillDate = zeroFill.map(item=>item<10?`0${item}`:item)
	return `${year}-${fillDate[0]}-${fillDate[1]} ${fillDate[2]}-${fillDate[3]}-${fillDate[4]}`
}
// 创建时间
export const addCreateTime = (data: category) => {
	data.createTime = formatDate(new Date())
	data.updateTime = null
}
// 更新时间
export const addUpdateTime = (data: category) => {
	data.updateTime = formatDate(new Date())
}


