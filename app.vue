<template lang="pug">
.app
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
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
.app {
  // background: rgb(2,6,23);
  // background: linear-gradient(13deg, rgba(2,6,23,1) 0%, rgba(1,1,60,1) 89%, rgba(16,24,60,1) 100%);
  background: $bg_second;
  height: 100vh;
  overflow-x: auto;
}
</style>
