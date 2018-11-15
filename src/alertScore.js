const alertScore = (scoreObj) => {
	let message = "Yakus earned:\n"
	let total = 0
	for(const yaku in scoreObj) {
		const points = scoreObj[yaku]
		if (points) {
			total += points
			message += `${yaku}: ${points}\n`
		}
	}
	message += `Total points: ${total}\n`
	message += `Thanks for playing!`
	alert(message)
}