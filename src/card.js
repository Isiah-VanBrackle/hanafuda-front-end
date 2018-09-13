class Card {
    
    constructor(obj) {
        this.id = obj.id
        this.src = obj.img_src
        this.suit = obj.suit
        // this.nature = obj.nature
        // this.sub_nature = obj.sub_suit
    }

    render(pos, i) {
        const img = document.createElement("img")
        img.src = this.src
        img.dataset.id = this.id
        img.dataset.suit = this.suit
        // img.dataset.nature = this.nature
        // img.dataset.sub_nature = this.sub_nature

        switch (pos) {
            case "hand":
                document.querySelector('#hand').children[i].appendChild(img)
                break
            case "collection":

                break
            case "table":
                document.querySelector('#board-cards-wrapper').children[i].appendChild(img)
        }
    }
    
    static deal() {
        document.querySelector("#deck").innerHTML = "<img src='images/back1.png'>"
        return fetch(API + "cards/deal")
        .then(res => res.json())
        .then(obj => {
            const boardCardsWrapper = document.querySelector('#board-cards-wrapper')
            const handCardsWrapper = document.querySelector('#hand')

            // Hand Cards
            obj["hand"].forEach((cardJson, i) => {
                const card = new Card(cardJson)
                card.render("hand", i)
            })

            // Table Cards
            obj["table"].forEach((cardJson, i) => {
                const card = new Card(cardJson)
                card.render("table", i)
            })
        })
    }

    static match(img1, img2) {
        
        // return fetch(API + "cards/match", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         id1: id1,
        //         id2: id2
        //     })
        // }).then(res => res.json())
    }
}