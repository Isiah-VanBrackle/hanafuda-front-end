
document.addEventListener("DOMContentLoaded", () => {
  let selection = [null, null]
  Menu.template()
  Menu.mainMenu()


  document.addEventListener("click", e => {
    
    const hand = document.querySelector("#hand")
    const board = document.querySelector("#board-cards-wrapper")

    if (e.target.nodeName === "IMG") {


      // Highlighting the card and setting the "selection" array
      if (e.target.parentNode.classList.contains("hand-card")) {
        selection[0] = e.target
          ;[...e.target.parentNode.parentNode.children].forEach(ele => ele.children[0].classList.remove("selected"))
          e.target.classList.add("selected")
      } else if (e.target.parentNode.classList.contains("board-card")) {
        selection[1] = e.target
        ;[...e.target.parentNode.parentNode.children].forEach(ele => {
          if (ele.children[0]) ele.children[0].classList.remove("selected")
        })
        e.target.classList.add("selected")
      }

      // Check if both values are set for selection
      if (selection.every(ele => ele !== null)) {
        
        // Front-end deselection
        ;[...hand.children].forEach(div => div.children[0].classList.remove("selected"));
        ;[...board.children].forEach(div => {
          if (div.children[0]) div.children[0].classList.remove("selected")
        });

        // Checking the suit of the cards
        if (selection[0].dataset.suit === selection[1].dataset.suit) {
          
          // I'll be using "for of" instead of "forEach()" since I wanna break out of the loop.
          const collection = document.querySelector("#collection").children
          for ( const [i, div] of [...collection].entries()) {
            if (!div.children[0]) {
              // get rid of the gap between the cards and add an empty spot to the end of the table
              const temp = selection[1].parentNode.parentNode
              selection[0].parentNode.remove()
              selection[1].parentNode.remove()
              temp.innerHTML += `<div class="board-card"></div>`
              
              // Adding the matched cards to the collection
              div.appendChild(selection[0])
              collection[i + 1].appendChild(selection[1])
              break
            }
          }

        } else if (true) {
          
        }

        //Setting the selection array to default values and ready for a new card selection
        selection = [null, null]

      }

    }
  })
})
