import axios from 'axios'

export default defineNuxtPlugin((nuxt) => {
  return {
    provide: {
      axios: axios
    }
  }
})