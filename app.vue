<template lang="pug">
div
  NuxtLayout
    NuxtPage
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Super Heroes` : 'Super Heroes'
  },
})
</script>
