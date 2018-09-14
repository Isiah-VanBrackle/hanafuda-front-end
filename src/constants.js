const API = "http://localhost:3000/"
let deckArr //deckArr will be assigned a value in Card.deal()
let selection = [null, null]
let isDeckLocked = true
let isHandLocked = false
let isBoardLocked = false
let deckImg = document.createElement("img")
deckImg.src = "images/back1.png"
