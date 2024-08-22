<script setup>

import Dice from '@/components/Dice.vue'
import { gameState } from '@/gameState.js'
</script>

<template>
  <div class="dices-view">
    <Dice :dice_number="gameState.dices.dice1" />
    <Dice :dice_number="gameState.dices.dice2" />
  </div>
</template>

<style scoped>
  .dices-view{
    height: 40vh;
    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
</style>