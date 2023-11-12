<script setup>
const heroData = useHeroes()
// const today = new Date()
// const milliseconds = today.getMilliseconds()
// const publicUrls = useNuxtApp().$config.public
// const hashedMessage = computed(() => {
//   return handleHashing(milliseconds, publicUrls.privatKey, publicUrls.publickKey)
// })


// async function charactersApi() {
//   try {
//     const response = await nuxtApp.$api.charactersApi.getCharacters(milliseconds, hashedMessage)
//     console.log('Response', response.data.data)
//   } catch (error) {
//     console.log('Error', error)
//   }
// }

onMounted( async () => {
  // await heroData.getHeroes(70)
  console.log('Test', heroData?.heroesData)
  // https://gateway.marvel.com/v1/public/comics?ts=1&apikey=c7c8b7331595e0dd2f512ff4ac48887a&hash=4941f81f88fc605a25569c75ab4d585d
  // console.log('Test2', `${publicUrls.apiUrl}${publicUrls.apiPath}/comics?ts=${milliseconds}&apikey=${publicUrls.publickKey}&hash=${hashedMessage.value}`)
})
</script>
<template lang="pug">
.main
  //- v-btn Button
</template>