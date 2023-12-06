<template lang="pug">
#app.app
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

body {
  &::-webkit-scrollbar { 
    display: none;
  }
}
.app {
  background: $bg_second;
  height: 100vh;
  overflow-y: auto;
}
</style>
