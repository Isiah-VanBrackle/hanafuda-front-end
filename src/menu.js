class Menu {
  static template() {
    const menu = document.createElement('div')
    menu.id = "menu-container"
    menu.addEventListener('click', this.menuHandler)
    document.body.append(menu)
  }

  static mainMenu() {
    const menu = document.querySelector("#menu-container")
    ;["play", "sign-in", "sign-up", "instructions"].forEach(str => menu.append(this.makeButton(str)))
  }

  // static playerSelectMenu() {
  //   this.template()
  //   const menu = document.querySelector("#menu-container")
  //   ;["1", "2", "3", "back to main menu"].forEach(str => menu.append(this.makeButton(str)))
  // }

  static nameInput() {
    const menu = document.querySelector("#menu-container")

    const h1 = document.createElement("h1")
    h1.innerText = "Please enter your name"

    const input = document.createElement("input")
    input.id = "name-input"

    const start = this.makeButton("start")

    menu.append(h1, input, start)
  }

  static makeButton(name) {
    let btn = document.createElement('button')
    btn.innerText = name
    return btn
  }

  static menuHandler(e) {
    switch (e.target.innerText) {
      case "play":
        [...e.target.parentNode.children].forEach(ele => ele.remove())
        Menu.nameInput()
        break
      case "back to main menu":
        [...e.target.parentNode.children].forEach(ele => ele.remove())
        Menu.mainMenu()
        break
      case "start":
        const val = document.querySelector("#name-input").value
        Game.template(val)
        Game.start()
        break
      default:

    }


  }




  // this closes the menu class
}
