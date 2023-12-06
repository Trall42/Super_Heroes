<script setup>
import listOfHistory from '/utils/publick_data.js'

const content = ref(null)
const part = ref(null)
let elementVisible = 150
const heroData = useHeroes()
const carouselData = ref([
  'carousel_1',
  'carousel_2',
  'carousel_3',
  'carousel_4',
  'carousel_5',
  'carousel_6',
  'carousel_7',
  'carousel_8',
])

function doScroll() {
  for (let i = 0; i < part?.value.length; i++) {
    let windowHeight = window.innerHeight
    let elementTop = part?.value[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      part?.value[i].classList.add("transition-part")
    } else {
      part?.value[i].classList.remove("transition-part")
    }
  }
}

function addElements() {
  content.value = document.getElementById('app')
  part.value = document.querySelectorAll(".part")
}

onMounted(() => {
  addElements()
  part?.value[0].classList.add("transition-part")
  content?.value.addEventListener("scroll", doScroll)
})
</script>
<template lang="pug">
.main
  .main__carousel
    v-carousel(
      hide-delimiters
      interval='4000'
      :cycle='true'
      :show-arrows='false'
      :height='500'
    )
      v-carousel-item(
        v-for='(carousel, index) in carouselData'
        :key='index'
        :src="`/images/carousel/${carousel}.jpg`"
        cover
      )
  .main__content-historie.d-flex.flex-column.align-center.mt-6
    .part.mt-6(
      v-for='part in listOfHistory'
      :key='part.id'
    )
      h2(v-if='part?.title') {{ '&nbsp&nbsp&nbsp&nbsp' + part.title }}
      h3(v-if='part?.subtitle') {{ '&nbsp&nbsp&nbsp&nbsp' + part.subtitle }}
      v-img.ma-4(v-if='part?.img' :src='part.img' alt='super hero')
      div.text-justify {{ '&nbsp&nbsp&nbsp&nbsp' + part.text }}
</template>
<style lang="scss">
.app {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.app::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}
.main__content-historie .part.transition-part {
  visibility: visible;
  opacity: 1;
}
.main__content-historie {
  width: 100%;
  padding: 0 24px;
  font-size: $font-size-16;
  color: $white;
  .part {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.4s, opacity 1s linear;
    width: 80%;
    .v-img {
      width: 100%;
      height: auto;
      max-width: 260px;
    }
  }
  .part:nth-child(odd) .v-img {
    float: right;
  }
  .part:nth-child(even) .v-img {
    float: left;
  }
  .part:nth-child(3) .v-img {
    width: 15%;
  }
}
</style>