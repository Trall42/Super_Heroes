<template lang="pug">
.herro__container.d-flex.justify-content-center.align-center.pa-6
  Loader(v-if='isLoading')
  .herro__wrapper.rounded-lg.mx-auto.pa-4
    .herro__back
      v-btn(
        border
        color='blue'
        elevation='20'
        variant='tonal'
        density="compact"
        icon="mdi-arrow-left"
        to='/heroes'
      )
    .d-flex.flex-wrap
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
        .herro-publisher.text-white.d-flex.align-center.mt-4
          span.mr-2 Publisher:
          .herro-publisher__group.d-flex(v-if='hero?.biography?.publisher === "Binary"')
            v-img(src="/logo/dc_logo.png" width="44" max-width="54" alt="icon")
            v-img(src="/logo/marvel_logo.png" width="44" max-width="54" alt="icon")
          .herro-publisher__group.d-flex(v-else-if='hero?.biography?.publisher === "DC Comics"')
            v-img(src="/logo/dc_logo.png" width="44" max-width="54" alt="icon")
          .herro-publisher__group.d-flex(v-else)
            v-img(src="/logo/marvel_logo.png" width="44" max-width="54" alt="icon")
    .herro__powerstats.mt-14(v-if='hero?.powerstats')
      p.text-white.text-h5 Powerstats:
      .d-flex.justify-space-between.flex-wrap.mx-10
        .d-flex.flex-column.text-center(v-for='(value, name, index) in hero.powerstats' :key='index')
          span.text-white.mb-4 {{ name }}
          v-progress-circular(:rotate="360" :size="60" :width="4" :model-value="value" color="teal")
            template(v-slot:default='{}') {{ value !== 'null' ? value : 0 }} %
    .herro__biography-aliases.mt-14
      p.text-white.text-h5.mt-6 Aliases:
      .d-flex.flex-wrap.mx-10(v-if='hero?.biography?.aliases.length')
        v-chip(
          v-for='item in hero?.biography?.aliases' :key='item'
          color='teal'
          class='chip ma-2'
          variant='outlined'
        ) {{ item }}
      p.text-white.text-h5.mt-6 Publisher:
      .d-flex.flex-wrap.mx-10.mt-2(v-if='hero?.biography?.publisher')
        v-chip(
          color='teal'
          class='chip'
          variant='outlined'
        ) {{ hero?.biography?.publisher }}
      p.text-white.text-h5.mt-6 Work:
      .d-flex.flex-wrap.mx-10.mt-2(v-if='hero?.work?.occupation')
        v-chip(
          color='teal'
          class='chip multi-line'
          variant='outlined'
        ) {{ hero?.work?.occupation }}
</template>

<script setup>
const nuxtApp = useNuxtApp()

definePageMeta({
  layout: 'empty',
})

const hero = ref({})
const route = useRoute()
const isLoading = ref(true)

// ------------ function --------------

async function getHero() {
  try {
    isLoading.value = true
    const response = await nuxtApp.$api.charactersApi.getCharacters(route.params.id)
    hero.value = response.data
  } catch(error) {
    console.log('Error', error)
  } finally {
    isLoading.value = false
  }
}
</script>
<style lang="scss">
.v-chip {
  padding: 4px 12px !important;
  white-space: wrap;
  &.v-chip--density-default {
    min-height: max-content;
    height: 100%;
  }
}
.multi-line {
  .v-chip__content {
    word-break: break-all !important;
  }
}
.herro__container {
  font-family: Inter;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: url('/public/images/hero_background_sky.webp') no-repeat;
  background-size: 100% 100%;
  .herro__wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100% !important;
    overflow: auto;
    max-width: 1024px;
    height: max-content;
    border: 2px solid $bg_first;
    background: rgba(21, 21, 21, 0.4);
    box-shadow: 0px 0px 20px #1877F2;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar { 
      display: none;
    }
    .herro__back {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
  }
}
.herro-parrameter {
  width: 100%;
  max-width: max-content;
}
.herro-parrameter__full-name,
.herro__biography-aliases .chip {
  font-size: $font-size-16;
  opacity: 0.75;
}
.herro-parrameter__name {
  font-weight: 600;
  font-size: $font-size-40;
}
.herro-publisher,
.herro-parrameter__appearance span {
  color: $white;
  font-size: $font-size-12;
}
</style>