
document.addEventListener("DOMContentLoaded", () => {
	Menu.template()
	Menu.mainMenu()

	document.addEventListener("click", e => {
		if (e.target.nodeName === "IMG") {
			if (e.target.parentNode.classList.contains("hand-card") && !isHandLocked) {
				handCardsListener(e)
			} else if (e.target.parentNode.classList.contains("board-card") && !isBoardLocked) {
				boardCardsListener(e)
			} else if (e.target.parentNode.id === "deck" && !isDeckLocked) {
				deckListener(e)
			}
		}
	})
})
