import { reactive } from 'vue'

class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  addScore(score) {
    this.score += score
  }
}

export const gameState = reactive({
  player1: new Player('Player 1'),
  player2: new Player('Player 2'),
  scoreToWin: 100,

  resetGame() {
    this.player1 = new Player('Player 1');
    this.player2 = new Player('Player 2');
  },

  setScoreToWin(score) {
    this.scoreToWin = score
  },
})