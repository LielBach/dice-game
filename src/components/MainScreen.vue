<script setup>
import { gameState } from '@/gameState.js'

const startGame = () => {
  console.log('Game started')
  gameState.resetGame()
}

</script>

<template>
  <div class="greetings">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>Dice Game</h1>
    <Button as="router-link" label="Router" to="/game" @click="startGame">Start Game</Button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  height: 30vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>
