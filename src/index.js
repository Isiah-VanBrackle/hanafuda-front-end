
document.addEventListener("DOMContentLoaded", () => {
	Menu.template()
	Menu.mainMenu()

	document.addEventListener("click", e => {
		console.log('hand is locked:', handIsLocked)
		console.log('should wait for deck?:', shouldWaitForDeck)
		
		if (e.target.nodeName === "IMG") {
			if (!shouldWaitForDeck) {
				if (e.target.parentNode.classList.contains("hand-card") && !handIsLocked) {
					handCardsListener(e)
				} else if (e.target.parentNode.classList.contains("board-card")) {
					boardCardsListener(e)
				}
			} else {
				if (e.target.parentNode.id === "deck") {
					let drawnCard = deckArr.pop()
					e.target.src = drawnCard.img_src
					toggleDeckListener(e)
				}
			}
		}
	})
})
