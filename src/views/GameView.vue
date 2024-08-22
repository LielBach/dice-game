<script setup>
import { gameState } from '@/gameState.js'
import PlayerScore from '@/components/PlayerScore.vue'
import Dices from '@/components/Dices.vue'
</script>

<template>
  <div class="game-view">
    <div class="score-container">
      <PlayerScore :player="gameState.player1" />
    </div>
    <Dices />
    <div class="score-container">
      <PlayerScore :player="gameState.player2" />
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