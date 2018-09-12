class Menu {
  static template() {
    let menu = document.createElement('div')
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

  static makeButton(name) {
    let btn = document.createElement('button')
    btn.innerText = name
    return btn
  }

  static menuHandler(e) {
    switch (e.target.innerText) {
      case "play":
        Game.template()
        // Menu.playerSelectMenu()
        break
      case "back to main menu":
        [...e.target.parentNode.children].forEach(ele => ele.remove())
        Menu.mainMenu()
        break
      default:

    }


  }




  // this closes the menu class
}
