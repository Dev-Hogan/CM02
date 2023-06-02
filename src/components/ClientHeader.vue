<template>
	<h2>{{ title }} - {{ subTitle }}</h2>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String
})
</script>

<style scoped></style>
