class Game {
    static template() {
        document.querySelector("#menu-container").remove()
        const gameContainer = document.createElement("div")
        gameContainer.id = "game-container"
        gameContainer.innerHTML = `
            <div id="board">
                <div id="deck"></div>
                <div id="board-cards-wrapper">
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                    <div class="board-card"></div>
                </div>
            </div>
                
            <div id="collection">
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
                <div class="collection-card"></div>
            </div>

            <div id="hand">
                <div class="hand-card"></div>
                <div class="hand-card"></div>
                <div class="hand-card"></div>
                <div class="hand-card"></div>
                <div class="hand-card"></div>
                <div class="hand-card"></div>
                <div class="hand-card"></div>
                <div class="hand-card"></div>
            </div>
        `
        document.body.appendChild(gameContainer)
    }

    static start() {
        return fetch(API + "games", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({current: true})
        }).then(res => res.json())
    }
}