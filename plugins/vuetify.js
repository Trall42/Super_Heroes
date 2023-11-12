import { createVuetify } from "vuetify"
import 'vuetify/styles'
export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
  })
  nuxt.vueApp.use(vuetify)
})