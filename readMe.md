# Hanafuda-Frontend

Hanafuda Frontend is a single page web application designed to allow users to play HanaFuda.

Hanafuda(*Flower Cards*) is a Japanese playing card game. There are 12 suits, reflecting the 12 months of the year, represented by a unique flower. Each suit has 4 cards with variations of it's unique flower and different attributes(*ribbons, animals, brights, etc.*). If you are curious about the significance of the flowers check [this site](https://namakajiri.net/nikki/the-flowers-of-hanafuda/)

## Getting Started
To begin you'll want to clone down both this Frontend repository and the Backend. The instructions below will focus on getting the Frontend up and running.  I'd recommend you completely set up the Backend first to avoid a "server in use error." Instructions for how to actually play the game are located below.

## Installing
1. In your text editor's terminal run 'open index.html'
2. Click *play* on the page which opens in your Web Browser

## How to Play
When the game starts, 8 cards are dealt to your hand (*shown at the bottom of the screen*) and to the table (*displayed in the center of the screen, next to the deck*). Your goal is to match cards in your hand with cards on the table. Once matched, the pair will enter your collection area (*located on the right-hand side of your screen*) where they will wait to be scored at the end of the game.

### Game flow
#### Match Phase
- Click a card in your hand, then a card on the table, in order to try to match them. On a match it transitions to the draw phase.
- After you've done the above; if there are no matches to be made or you attempted to match 2 cards which don't match, the game will alert you and move into the draw phase
- *Hint* No two cards look alike, matches are made when cards share a common month. You can tell which month a card represents by the prominent flower on it.

#### Draw Phase
- As a player you'll never draw a card into your hand. The draw phase exist to replenish the table
- Click the deck to draw, then try to match the drawn card with a card on the table by clicking it.
- If there is no match, the game will alert you and the card will occupy an empty space on the table.

#### Resolution
- The game cycles between the phases described above until you've matched all of your cards.
- If the cards in your collection satisfy any of the 12 Yaku conditions described below, you win.

### The 12 Yaku's
1. Kasu(*Plains*) - 10 plain cards, 1pt  
2. Tanzaku(*Ribbons*) - Any 5 ribbon cards, 1pt
3. Tane(*Animals*) - Any 5 animal cards, 1pt
4. Ino-Shika-Cho(*Boar-Deer-Butterfly*) - The animal cards of clover(*boar*), maple(*deer*), and peony(*butterfly*), 5pts
5. Akatan(*Red Poetry Ribbons*) - All 3 red poetry ribbons, 6pts
6. Aotan(*Blue Poetry Ribbons*) - All 3 blue poetry ribbons, 6pts
7. Sanko(*Three Brights*) - 3 bright cards, not including the rain-man card, 6pts
8. Ame-Shiko(*Rain-man*) - 4 bright cards, including the rain-man, 8pts
9. Shiko(*Four Brights*) - 4 bright cards, not including the rain-man card, 10pts
10. Goko(*Five Brights*) - All 5 bright cards, 15pts
11. Tsuki-fuda(*Monthly Card*) - All 4 flower cards representing a specific month 4pts
12. Bake-fuda(*Wild Card*) - The animal card of chrysanthemum can count as a plain card, if you have 9 other plain cards

## Built with
*Javascript*,
*CSS*,
*HTML*



## Authors
Amirata Khodaparast -Initial work (Frontend)
Isiah VanBrackle - Initial work (Backend)


## License
This project is licensed under the MIT License - see the LICENSE.md file for details
