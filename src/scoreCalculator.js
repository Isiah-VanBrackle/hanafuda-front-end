const kasuPoints = (cardsArr) = () => {
	const plainIds = [
		1, 2, 5, 6, 9, 10, 13, 14,
		17, 18, 21, 22, 25, 26, 29, 30,
		33, 34, 37, 38, 41, 45, 46, 47
	]
	let points = 0
	let plainCount = 0
	let hasWildCard = false

	cardsArr.forEach(c => {
		c.id === 36 && (hasWildCard = true)
		plainIds.includes(c.id) && plainCount++
	})

	if (plainCount >= 10) {
		points = 1 + plainCount - 10 
	} else if (plainCount === 9 && hasWildCard) {
		points = 1
	}

	return points
}

const tanzakuPoints = (cardsArr) => {
	const ribbonIds = [
		3, 7, 11, 15, 19,
		23, 27, 35, 39, 42
	]
	let ribbonCount = 0

	cardsArr.forEach(c => {
		ribbonIds.includes(c.id) && ribbonCount++
	})

	return ribbonCount >= 5 ? 1 + ribbonCount - 5 : 0
}

const tanePoints = (cardsArr) => {
	const animalIds = [
		8, 16, 20, 24, 28,
		31, 36, 40, 43
	]
	let animalCount = 0

	cardsArr.forEach(c => {
		animalIds.includes(c.id) && animalCount++
	})

	return animalCount >= 5 ? 1 + animalCount - 5 : 0
}

const inoShikaChoPoints = (cardsArr) => {
	const inoShikaChoIds = [24, 28 ,40]
	let count = 0

	cardsArr.forEach(c => {
		inoShikaChoIds.includes(c.id) && count++
	})

	return count === 3 ? 5 : 0
}

// Red poetry ribbons
const akatanPoints = (cardsArr) => {
	const akatanIds = [3, 7, 11]
	let count = 0

	cardsArr.forEach(c => {
		akatanIds.includes(c.id) && count++
	})

	return count === 3 ? 6 : 0
}

// Blue ribbons
const aotanPoints = (cardsArr) => {
	const aotanIds = [23, 35, 39]
	let count = 0

	cardsArr.forEach(c => {
		aotanIds.includes(c.id) && count++
	})

	return count === 3 ? 6 : 0
}

// 3 brights not containing Rainman
const sankoPoints = (cardsArr) => {
	const sankoIds = [4, 12, 32, 48]
	let count = 0

	cardsArr.forEach(c => {
		sankoIds.includes(c.id) && count++
	})

	return count === 3 ? 6 : 0
}

// 4 brights containing Rainman
const ameShikoPoints = (cardsArr) => {
	const brightIds = [4, 12, 32, 44, 48]
	let hasRainman = false
	let count = 0

	cardsArr.forEach(c => {
		brightIds.includes(c.id) && count++
		c.id === 44 && (hasRainman = true)
	})

	return count === 4 && hasRainman ? 8 : 0
}

// 4 brights not containing Rainman
const shikoPoints = (cardsArr) => {
	const shikoIds = [4, 12, 32, 48]
	let count = 0

	cardsArr.forEach(c => {
		shikoIds.includes(c.id) && count++
	})

	return count === 4 ? 10 : 0
}

// All 5 brights
const gokoPoints = (cardsArr) => {
	const brightIds = [4, 12, 32, 44, 48]
	let count = 0

	cardsArr.forEach(c => {
		brightIds.includes(c.id) && count++
	})

	return count === 5 ? 15 : 0
}

const scoreCalculator = (cardsArr) => {
	return {
		"Kasu": kasuPoints(cardsArr),
		"Tanzaku": tanzakuPoints(cardsArr),
		"Tane": tanePoints(cardsArr),
		"Ino-Shika-Cho": inoShikaChoPoints(cardsArr),
		"Akatan": akatanPoints(cardsArr),
		"Aotan": aotanPoints(cardsArr),
		"Sanko": sankoPoints(cardsArr),
		"Ame-Shiko": ameShikoPoints(cardsArr),
		"Shiko": shikoPoints(cardsArr),
		"Goko": gokoPoints(cardsArr)
	}
}

export default scoreCalculator