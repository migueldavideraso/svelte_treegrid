
export const timeout = (time) => {

	return new Promise((resolve) => {
		setTimeout(() => resolve(), time || 1000)
	})
}


export const groupByKey = (array, key) => {

	const result = {}

	array.forEach(obj => {

		const value = obj[key] || null

		if (result[value]) {
			result[value].push(obj)
		}
		else {
			result[value] = [ obj ]
		}
	})

	return result
}

export const reduceByKey = (array, key) => {

	const result = {}

	array.forEach(obj => {
		result[obj[key] || null] = obj
	})

	return result
}

export const formatNumber = (number, args) => {

	if (number?.constructor !== Number) {
		return ''
	}

	return number.toLocaleString(undefined, args || {})
}

export const formatDate = (date, args) => {

	if (date?.constructor !== Date) {
		return ''
	}

	return date.toLocaleString(undefined, args || { day: 'numeric', month: 'numeric', year: 'numeric' })
}

export const getTextValue = (value, column) => {

	if (column.type === 'number') {
		return formatNumber(value, column.format)
	}

	if (column.type === 'date') {
		return formatDate(value, column.format)
	}

	return value
}


export const getData = (dataSource, columns) => {

	const result = dataSource.map(obj => {

		const data = { ...obj }

		data.__searchString = ''
		columns.forEach(column => {
			data.__searchString += getTextValue(data[column.field] || '', column)
		})

		data.__searchString = data.__searchString.toLowerCase()

		return data
	})

	return result
}

export const getDisplayedData = (data, searchString) => {

	searchString = searchString.toLowerCase()

	if (!searchString) {
		return data
	}

	const dataById = reduceByKey(data, 'id')
	const result = {}

	const addParent = (obj) => {

		if (!obj.parent || !dataById[obj.parent]) {
			return
		}

		result[obj.parent] = dataById[obj.parent]
		addParent(dataById[obj.parent])
	}

	data.forEach(obj => {

		if (
			result[obj.id] ||
			obj.__searchString.indexOf(searchString) === -1
		) {
			return
		}

		result[obj.id] = obj
		addParent(obj)
	})

	return Object.values(result)
}
