<script setup>
defineProps({
  player: Object,
})
</script>

<template>
  <Card>
    <template #title>{{ player.name }}</template>
    <template #subtitle>Score: {{ player.score }}</template>
  </Card>
</template>

<style scoped></style>