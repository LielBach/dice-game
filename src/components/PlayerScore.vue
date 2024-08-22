<script setup>
defineProps({
  player: Object
})
</script>

<template>
  <Card class="score-card">
    <template #title>{{ player.name }}</template>
    <template #subtitle
      >Global Score: {{ player.get_global_score() }} <br />
      Accumulated Score:
      {{ player.get_accumulated_score() }}
    </template>
  </Card>
</template>

<style scoped>
.score-card {
  width: 13rem;
  height: 8rem;
}
</style>