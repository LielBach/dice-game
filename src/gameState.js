import { reactive } from 'vue'

class Player {
  constructor(name) {
    this.name = name
    this.global_score = 0
    this.accumulated_score = 0
  }

  hold() {
    this.global_score = this.accumulated_score + this.global_score
    this.accumulated_score = 0
  }

  lose_score() {
    this.accumulated_score = 0
  }

  get_global_score() {
    return this.global_score
  }

  get_accumulated_score() {
    return this.accumulated_score
  }

  get_total_score() {
    return this.global_score + this.accumulated_score
  }

}


class Players {
  constructor() {
    this.player1 = new Player('Player 1')
    this.player2 = new Player('Player 2')
    this.currentPlayer = this.player1
  }
}


class Dices {
  constructor() {
    this.dice1 = 1
    this.dice2 = 1
  }

  roll() {
    this.dice1 = Math.floor(Math.random() * 6) + 1
    this.dice2 = Math.floor(Math.random() * 6) + 1
  }
}

export const gameState = reactive({
  players: new Players(),
  dices: new Dices(),
  scoreToWin: 100,

  resetGame() {
    this.players = new Players();
    this.dices = new Dices();
    this.scoreToWin = 100;
  },

  nextRound() {
    if (this.players.currentPlayer.get_total_score() >= this.scoreToWin){
      alert(`${this.players.currentPlayer.name} wins!`)
      this.resetGame()
      return
    }

    if (this.players.currentPlayer === this.players.player1) {
      this.players.currentPlayer = this.players.player2
    } else {
      this.players.currentPlayer = this.players.player1
    }
  },

  hold(){
    this.players.currentPlayer.hold()
    this.nextRound()
  },

  roll() {
    this.dices.roll()

    if (this.dices.dice1 === 6 || this.dices.dice2 === 6) {
      this.players.currentPlayer.lose_score()
    } else {
      this.players.currentPlayer.accumulated_score += this.dices.dice1 + this.dices.dice2
    }

    this.nextRound()
  },

  setScoreToWin(score) {
    this.scoreToWin = score
  },
})