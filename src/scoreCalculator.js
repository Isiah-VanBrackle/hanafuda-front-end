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

const TanzakuPoints = (cardsArr) => {
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

const TanePoints = (cardsArr) => {
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

const scoreCalculator = (cardsArr) => {

}