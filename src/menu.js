class Menu {
  static template() {
    let menu = document.createElement('div')
    menu.id = "menu-container"
    menu.addEventListener('click', this.menuHandler)
    document.body.append(menu)
  }

  static mainMenu() {
    this.template()
    const menu = document.querySelector("#menu-container")
    menu.append(this.makeButton("play"))
    menu.append(this.makeButton("sign-in"))
    menu.append(this.makeButton("sign-up"))
    menu.append(this.makeButton("instructions"))
  }

  static playerSelectMenu() {
    this.template()
    const menu = document.querySelector("#menu-container")
    menu.append(this.makeButton("1"))
    menu.append(this.makeButton("2"))
    menu.append(this.makeButton("3"))
    menu.append(this.makeButton("back"))

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
        Menu.playerSelectMenu()
        break;
      default:

    }


  }




  // this closes the menu class
}
