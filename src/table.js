class Table {
    constructor(gameId) {
        this.gameId = gameId
    }

    createTable() {
        return fetch(API + "/tables", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({game_id: this.gameId})
		}).then(res => res.json())
    }
}