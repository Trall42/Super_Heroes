<template lang="pug">
.heroes__container
  Loader(v-if='getHeroData.isPending')
  .heroes__wrapper
    .heroes__header.d-flex.justify-space-between.mb-6
      .d-flex.heroes-logo
        NuxtLink.navbar__link(to='/')
          v-img(width="80" height="42" src="./logo/dc_marvel_logo_two.webp")
      .heroes__search.d-flex
        v-text-field(
          v-model='searchHeroes'
          label='Search heroes'
          append-inner-icon='mdi-magnify'
          bg-color='#0a1172'
          color='#1877F2'
          density='compact'
          single-line
          hide-details
          variant='outlined'
        )
    #heroes-data-screen.heroes__wrapper-content(v-if="getHeroData.heroesData.length")
      .heroes__hero.text-white(
        v-for="hero in heroes"
        :key="hero.id"
      )
        NuxtLink(:to='`/heroes/${hero.id}`')
          .heroes__hero-wrapper(:style='`background-image: url(${hero?.image?.url}); height: 100%;`')
            div {{ hero.name }}
    .heroes__empty.text-white.d-flex.justify-center.align-center(v-if="!getHeroData.heroesData.length && !!searchHeroes") Character with given name not found
  .heroes__pagination.text-center(
    v-if='!searchHeroes'
  )
    v-pagination(
      v-model='page'
      active-color='#051094'
      border
      color='#1877F2'
      size='40'
      variant='outlined'
      :length='74'
      :total-visible='7'
      @update:modelValue='getHeroes(page)'
    )
</template>
<script setup>
definePageMeta({
  layout: 'empty',
})

const getHeroData = useHeroes()
const nuxtApp = useNuxtApp()
const page = ref(1)
const heroes = computed(() => {
  return getHeroData?.heroesData
})
const timePending = ref(null)
const searchHeroes = ref('')
const searchError = ref('')

// --------------- watch ----------------

watch(searchHeroes, (value) => {
  clearTimeout(timePending.value)
  timePending.value = setTimeout( async () => {
    serchHeroes()
  }, 1500)
})

// -------- function ---------
async function serchHeroes() {
  if (searchHeroes.value) {
    try {
      getHeroData.isPending = true
      const response = await nuxtApp.$api.charactersApi.searchCharacters(searchHeroes.value)
      if (response.data.response === 'success') getHeroData.heroesData = response.data.results
      else getHeroData.heroesData = []
    } catch (error) {
      console.log('Error', error)
    } finally {
      getHeroData.isPending = false
    }
  } else getHeroes()
}

function getHeroes(page) {
  getHeroData.getHeroes(page)
}

onBeforeUnmount(() => {
  clearTimeout(timePending.value)
})

onMounted(() => {
  getHeroes()
})
</script>
<style lang="scss">
.heroes__container {
  position: relative;
  padding: 1em 1.5em;
  height: 100vh;
  -webkit-background-size: 100% 100% !important;
  -moz-background-size: 100% 100% !important;
  -o-background-size: 100% 100% !important;
  background-size: 100% 100% !important;
  background: url('/public/heroes_background.jpg') no-repeat center center fixed;
  .heroes__wrapper {
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    .heroes__search {
      min-width: 300px;
    }
  }
  .heroes__empty {
    height: calc(100vh - 90px);
    border-radius: 10px;
    border: 1px solid $light_blue;
    background: rgba(14, 17, 27, 0.8);
    box-shadow: 0px 0px 14px 2px $light_blue;
  }
  .heroes__wrapper-content {
    padding: 24px;
    height: calc(100vh - 90px);
    overflow-y: auto;
    display: grid;
    grid-gap: 1.5em;
    justify-items: center;
    grid-template-columns: 1fr;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .heroes__hero {
    width: 100%;
    height: 400px;
    min-width: 100px;
    border-radius: 10px;
    .heroes__hero-wrapper {
      position: relative;
      background-size: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 2px 2px $light_blue;
      & > div {
        position: absolute !important;
        bottom: 20px;
        left: 20px;
        color: $white;
        font-size: $font-size-28;
        font-weight: 600;
        text-shadow: 2px 0px 4px $bg_second;
      }
    }
    .heroes__hero-wrapper:hover {
      box-shadow: 0px 0px 10px 10px $light_blue;
      border: 1px solid $light_blue;
    }
  }
  .heroes__pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid $light_blue;
    background: rgba(14, 17, 27, 0.8);
    border-radius: 10px;
    z-index: 1;
  }
}
.heroes-logo .v-img img {
  border-radius: 16px;
  border: 1px solid $white;
}

@media(min-width: 450px) {
  .heroes__container {
    .heroes__wrapper-content {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media(min-width: 768px) {
  .heroes__container {
    .heroes__wrapper-content {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

@media(min-width: 1280px) {
  .heroes__container {
    .heroes__wrapper-content {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>