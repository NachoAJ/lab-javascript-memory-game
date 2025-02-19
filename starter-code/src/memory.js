class MemoryGame {
	constructor(cards) {
		this.cards = cards
		this.pickedCards = []
		this.pairsClicked = 0
		this.pairsGuessed = 0
	}
	shuffleCards() {
		for (let i = this.cards.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * i)
			let aux = this.cards[i]
			this.cards[i] = this.cards[j]
			this.cards[j] = aux
		}
	}
	checkIfPair(card1, card2) {
		this.pairsClicked += 1
		if (card1 === card2) {
			this.pairsGuessed += 1
			return true
		} else {
			return false
		}
	}
	isFinished() {
		if (this.pairsGuessed === this.cards.length / 2) return true
		else return false
	}
}
