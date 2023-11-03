import { createVuetify } from "vuetify"
import 'vuetify/styles'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import { VBtn } from 'vuetify/components/VBtn'

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    // components,
    // directives,
    // aliases: {
    //   VBtnPrimary: VBtn,
    //   VBtnSecondary: VBtn,
    // },
    // defaults: {
    //   VBtnPrimary: {
    //     class: ['btn-primary', 'text-none'],
    //     style: [{ display: 'block' }]
    //   },
    //   VBtnSecondary: {
    //     class: ['text-none', 'v-btn--secondary'],
    //     style: [{ display: 'block' }]
    //   },
    //   VBtn: { 
    //     variant: 'outlined',
    //     // ripple: false,
    //     class: 'my-button',
    //     style: [{ textTransform: 'none' }]
    //   },
    // },
  })
  nuxt.vueApp.use(vuetify)
})