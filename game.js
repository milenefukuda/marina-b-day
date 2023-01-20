class Game {
  constructor() {
    this.boardSize = 12;
    this.positions = [];
    this.defaultPositions = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    this.clickedCards = [];
  }

  genBoard(gameBoard) {
    for (let i = 0; i < this.boardSize; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      gameBoard.appendChild(card);
    }
  }

  positionPictures() {
    // CREDITOS: MATHEUS OLIVEIRA
    for (let i = 0; i < this.boardSize; i++) {
      const randomElement =
        this.defaultPositions[
          Math.floor(Math.random() * this.defaultPositions.length)
        ];
      let index = this.defaultPositions.indexOf(randomElement);

      this.defaultPositions.splice(index, 1);
      this.positions.push(randomElement);
    }
  }

  flipCard(cardToFlip, index, gameBoard) {
    if (this.clickedCards.length === 2) {
      return;
    }

    const img = document.createElement("img");
    img.setAttribute("src", `./images/${this.positions[index]}.jpg`);
    img.classList.add("flipped-card");

    cardToFlip.appendChild(img);

    this.clickedCards.push({
      htmlCard: cardToFlip,
      imgIndex: this.positions[index],
    });
    this.checkTurn(gameBoard);
  }

  checkTurn(gameBoard) {
    console.log(this.clickedCards);

    if (this.clickedCards.length < 2) {
      return;
    }

    if (this.clickedCards[0].imgIndex !== this.clickedCards[1].imgIndex) {
      setTimeout(() => {
        console.log(this.clickedCards[0]);
        console.log(this.clickedCards[1]);

        this.clickedCards[0].htmlCard.removeChild(
          this.clickedCards[0].htmlCard.children[0]
        );
        this.clickedCards[1].htmlCard.removeChild(
          this.clickedCards[1].htmlCard.children[0]
        );

        this.clickedCards = [];
      }, 1000);
    } else {
      this.clickedCards = [];
      this.winCheck(gameBoard);
    }
  }

  winCheck(gameBoard) {
    for (let i = 0; i < gameBoard.children.length; i++) {
      if (!gameBoard.children[i].children.length) {
        return;
      }
    }

    window.alert(
      "AEAEEAEAE Parabéns, Marina! Você ganhou um beijo no S2! Aproveita o BBQ hoje!"
    );
  }
}
