<script setup>
import dice1 from '@/assets/dice1.png'
import dice2 from '@/assets/dice2.png'
import dice3 from '@/assets/dice3.png'
import dice4 from '@/assets/dice4.png'
import dice5 from '@/assets/dice5.png'
import dice6 from '@/assets/dice6.png'
import { computed } from 'vue'

const dice_number_to_image = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
}

defineProps({
  dice_number: Number,
})

</script>

<template>
  <div>
    <img class="dice_img" :src="dice_number_to_image[dice_number]" alt="dice" />
  </div>
</template>

<style scoped>
  .dice_img{
    width: 10rem;
    height: 10rem;
  }
</style>