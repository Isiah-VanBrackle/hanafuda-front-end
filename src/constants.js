const API = "http://localhost:3000/"
let deckArr //deckArr will be assigned a value in Card.deal()
let selection = [null, null]
let shouldWaitForDeck = false
let handIsLocked = false

const handCardsListener = e => {
	selectCard(e.target, true)
	collectOrDeselectCard(true)
}

const boardCardsListener = e => {
	selectCard(e.target)
	collectOrDeselectCard(true)
}

const toggleDeckListener = e => {
	// Enable the hand and board listeners
	// console.log(selection)
	shouldWaitForDeck = !shouldWaitForDeck
} 

function selectCard(img, isHandCard=false) {
	selection[isHandCard ? 0 : 1] = img
	;[...img.parentNode.parentNode.children].forEach(ele => {
		if (ele.children[0]) ele.children[0].classList.remove("selected")
	})
	img.classList.add("selected")
}

function collectOrDeselectCard(isHandCard=false) {
	
	// Check if selection doesn't have any nulls 
	if (selection.every(x => x)) {
		const board = document.querySelector("#board-cards-wrapper")

		// Unhighlight the cards
		selection.forEach(img => img.classList.remove("selected"))

		// Check if the suits are matching
		if (selection[0].dataset.suit === selection[1].dataset.suit) {

			// Remove the matching cards
			const temp = selection[1].parentNode.parentNode
			selection.forEach(img => img.parentNode.remove())
			if (!isHandCard) temp.innerHTML += `<div class="board-card"></div>`

			// Put them in the collection
			const collection = document.querySelector("#collection")
			const startingIndex = parseInt(collection.dataset.startingIndex)
			collection.children[startingIndex].append(selection[0])
			collection.children[startingIndex + 1].append(selection[1])
			collection.dataset.startingIndex = startingIndex + 2

			// Disable the eventListener for board and hand cards
			shouldWaitForDeck = true
			handIsLocked = true

			// Reset the selection array
			selection = [null, null]

		} else  {
			const con = [...board.children].some(div => {
				return div.firstChild ? div.firstChild.dataset.suit === selection[0].dataset.suit : false
			})
			if (con) {
				alert("You could match that card with another card on the table!")
				selectCard(selection[0], true)
				handIsLocked = true
				selection[1] = null
			} else {
				alert("That doesn't match any of the cards on the table!");
				for (const div of board.children) {
					if (!div.firstChild) {
						selection[0].parentNode.remove()
						div.appendChild(selection[0])
						break
					}
				}
				selection = [null, null]
			}
		}
	} else if (true) {
		
	}
}