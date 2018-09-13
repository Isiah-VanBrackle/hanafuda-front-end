class GamePlayer {
    static create(gameId, playerId) {
        return fetch(API + "game_players", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                game_id: gameId,
                player_id: playerId
            })
        }).then(res => res.json())
    }
}