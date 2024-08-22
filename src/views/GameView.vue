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
      <Dices />
      <div class="button-panel">
        <Button @click="gameState.roll()">Roll Dices</Button>
        <Button @click="gameState.hold()">Hold</Button>
        <Button @click="gameState.resetGame()">Reset</Button>
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

.game-view {
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>