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

function selectCard(img, isHandCard=false) {
	selection[isHandCard ? 0 : 1] = img
	if (handIsLocked && !shouldWaitForDeck) {
		console.log('there is a match')
	} else {
		;[...img.parentNode.parentNode.children].forEach(ele => {
			if (ele.children[0]) ele.children[0].classList.remove("selected")
		})
	}
	img.classList.add("selected")
}

function collectOrDeselectCard(isHandCard=false) {
	// Check if selection doesn't have any nulls 
	if (selection.every(x => x)) {
		const board = document.querySelector("#board-cards-wrapper")
		selection.forEach(img => img.classList.remove("selected"))
		if (selection[0].dataset.suit === selection[1].dataset.suit) {

			// Remove the matching cards from the board
			const temp = selection[1].parentNode.parentNode
			// 'Remove' the drawn card from deck
			document.querySelector('#deck img').setAttribute('src', 'images/back1.png')
			// selection.forEach(img => img.parentNode.remove())
			if (!isHandCard) temp.innerHTML += `<div class="board-card"></div>`

			// Put them in the collection
			const collection = document.querySelector("#collection")
			const startingIndex = parseInt(collection.dataset.startingIndex)
			collection.children[startingIndex].append(selection[0])
			collection.children[startingIndex + 1].append(selection[1])
			collection.dataset.startingIndex = startingIndex + 2

			// Disable the eventListener for board and hand cards
			// basic deck to board match
			if (!shouldWaitForDeck && !handIsLocked) {
				handIsLocked = true
				shouldWaitForDeck = true
			}
			else if (handIsLocked && !shouldWaitForDeck) {
				handIsLocked = false
				shouldWaitForDeck = false
			// basic hand to board match

			} else {
				handIsLocked = false
				shouldWaitForDeck = false
			}

			// Reset the selection array
			selection = [null, null]

		// when the two cards selected don't match
		} else  {
			const con = [...board.children].some(div => {
				return div.firstChild ? div.firstChild.dataset.suit === selection[0].dataset.suit : false
			})
			// purposeful mismatch
			if (con) {
				alert("You could match that card with another card on the table!")
				selectCard(selection[0], true)
				selection[1] = null
			// absolutely no matxh
			} else {
				alert("That doesn't match any of the cards on the table!");
				for (const div of board.children) {
					if (!div.firstChild) {
						document.querySelector('#deck img').src = 'images/back1.png'
						div.appendChild(selection[0])
						break
					}
				}
				if (!shouldWaitForDeck && handIsLocked) {
					shouldWaitForDeck = false
					handIsLocked = false
				} else {
					handIsLocked = true
					shouldWaitForDeck = true
				}
				selection = [null, null]
			}
		}
	} else if (true) {
		
	}
}