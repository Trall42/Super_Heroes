<template lang="pug">
.herro__container.pa-6
  .herro__wrapper.mx-auto
    .d-flex
      v-img.d-flex.rounded-lg(v-if="hero?.image?.url" :src="hero?.image?.url" width="300" max-width="300" height="400" :alt="hero.name")
      .herro-parrameter.pa-6
        .herro-parrameter__full-name.text-white {{ hero?.biography?.[`full-name`] || 'N/A' }}
        .herro-parrameter__name.text-white {{ hero?.name || 'N/A' }}
        .herro-parrameter__appearance
          .d-flex.mr-4.mt-4
            v-img.mr-2(src="/images/icons/Height.png" max-width="24" width="24" height="24" alt="icon")
            span.align-self-end {{ hero?.appearance?.height[1] || 'N/A' }}
          .d-flex.mr-4.mt-4
            v-img.mr-2(src="/images/icons/Weight.png" max-width="24" width="24" height="24" alt="icon")
            span.align-self-end {{ hero?.appearance?.weight[1] || 'N/A'}}
          .d-flex.mr-4.mt-4
            v-img.mr-2(src="/images/icons/Universe.png" max-width="24" width="24" height="24" alt="icon")
            span.align-self-end {{ hero?.appearance?.race || 'N/A'}}
    .herro__powerstats
      p.text-white.text-h5 Powerstats:
        
    .herro__biography-aliases.mt-16
      p.text-white.text-h5 Aliases:
      .d-flex.flex-wrap.ml-10
        span.text-white(v-for='item in hero?.biography?.aliases' :key='item') {{ item + ',&nbsp' }}
</template>

<script setup>
const nuxtApp = useNuxtApp()

definePageMeta({
  layout: 'empty',
})

const hero = ref({})
const route = useRoute()

// ------------ function --------------

async function getHero() {
  try {
    const response = await nuxtApp.$api.charactersApi.getCharacters(route.params.id)
    hero.value = response.data
    console.log('Hero', response)
  } catch(error) {
    console.log('Error', error)
  }
}


onMounted(() => {
  getHero()
  console.log('Route', route.params.id)
})
</script>
<style lang="scss">
.herro__container {
  font-family: Inter;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: url('/public/images/hero_background_sky.webp') no-repeat;
  background-size: 100% 100%;
  .herro__wrapper {
    width: 100%;
    max-width: 1024px;
    // height: 1000px;
    border: 1px solid green;
  }
}
.herro-parrameter {
  width: 100%;
}
.herro-parrameter__full-name,
.herro__biography-aliases > div > span {
  font-size: $font-size-16;
  opacity: 0.75;
}
.herro-parrameter__name {
  font-weight: 600;
  font-size: $font-size-40;
}
.herro-parrameter__appearance span {
  color: $white;
  font-size: $font-size-12;
}
</style>