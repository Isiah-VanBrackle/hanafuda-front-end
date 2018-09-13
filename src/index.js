
document.addEventListener("DOMContentLoaded", () => {
	Menu.template()
	Menu.mainMenu()

	document.addEventListener("click", e => {
		if (e.target.nodeName === "IMG") {
			if (!shouldWaitForDeck) {
				if (e.target.parentNode.classList.contains("hand-card") && !handIsLocked) {
					handCardsListener(e)
				} else if (e.target.parentNode.classList.contains("board-card")) {
					boardCardsListener(e)
				}
			} else {
				if (e.target.parentNode.id === "deck") {
					deckListener(e)
				}
			}
		}
	})
})
