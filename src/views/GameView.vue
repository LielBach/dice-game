<script setup>
import { gameState } from '@/gameState.js'
import PlayerScore from '@/components/PlayerScore.vue'
import Dices from '@/components/Dices.vue'
</script>

<template>
  <div class="game-view">
    <div class="score-container">
      <PlayerScore :player="gameState.players.player1" />
    </div>
    <div class="game-panel">
      <h1>{{gameState.players.currentPlayer.name}} turn</h1>
      <Dices />
      <div class="score-container">
        <label>Desired Score</label>
        <InputText class="score-input-field" type="text" v-model="gameState.scoreToWin"/>
      </div>
      <div class="button-panel">
        <Button @click="gameState.roll()">Roll Dices</Button>
        <Button @click="gameState.hold()">Hold</Button>
        <Button @click="gameState.resetGame()">Reset</Button>
        <Button as="router-link" severity="danger" to="/">Main Menu</Button>
      </div>
    </div>
    <div class="score-container">
      <PlayerScore :player="gameState.players.player2" />
    </div>
  </div>
</template>

<style scoped>
.score-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-panel{
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
}

.score-input-field{
  margin: 0.3rem;
  text-align: center;
}

.game-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-view {
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>