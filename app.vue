<template lang="pug">
.app(ref='content')
  NuxtLayout
    NuxtPage
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Super Heroes` : 'Super Heroes'
  },
})

const content = ref()
// const bottom = ref(false)
 
function doScroll(event) {
  console.log('Event', event)
  // const scrollHeight = event.target.scrollHeight
  // const scrollTop = event.target.scrollTop
  // const clientHeight = event.target.clientHeight
 
  // if (scrollTop + clientHeight >= scrollHeight) {
  //   console.log('Yay!1')
  //   bottom.value = true
  // } else {
  //   console.log('Yay!2')
  //   bottom.value = false
  // }
}
 
onMounted(() => {
  // document.addEventListener('scroll', doScroll, true)
  console.log('Content', content)
  content.value.addEventListener("scroll", doScroll)
})

// onBeforeUnmount(() => {
//   content.value.removeEventListener(doScroll)
// }) 

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
  border: 1px solid red;
}
</style>
