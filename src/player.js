class Player {
    static create(name) {
        return fetch(API + "players", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: name})
        }).then(res => res.json())
    }
}