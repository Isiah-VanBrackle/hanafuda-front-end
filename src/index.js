import scoreCalculator from './scoreCalculator'
document.addEventListener("DOMContentLoaded", () => {
	Menu.template()
	Menu.mainMenu()

	document.addEventListener("click", e => {
		// Logic for end of the game
		const hand = document.querySelector('#hand')
		if (hand) {
			const gameFinsihed = [...hand.children].every(ch => !ch.firstChild)
			if (gameFinsihed) {
				const collectedIds = []
				const scores = scoreCalculator()

			}
		}

		console.log('hand is locked:', handIsLocked)
		console.log('should wait for deck?:', shouldWaitForDeck)
		console.log('current selection:', selection)

		if (e.target.nodeName === "IMG") {
			if (!shouldWaitForDeck) {
				if (e.target.parentNode.classList.contains("hand-card") && !handIsLocked) {
					handCardsListener(e)
				} else if (e.target.parentNode.classList.contains("board-card")) {
					boardCardsListener(e)
				}
			// draw from deck logic:
			} else {
				if (e.target.parentNode.id === "deck") {
					let drawnCardObj = deckArr.pop()
					let drawnCard = new Card(drawnCardObj)
					e.target.src = drawnCardObj.img_src

					selection[0] = drawnCard.cardImgTag()
					console.log('selection after draw:', selection)
					shouldWaitForDeck = false
				}
			}
		}
	})
})
