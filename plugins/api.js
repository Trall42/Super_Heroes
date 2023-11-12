import charactersApi from '~/api/characters-api'

import axios from 'axios'
export default defineNuxtPlugin((nuxt) => {
  const publicPath = nuxt.$config.public
  const repositories = {
    charactersApi: charactersApi(axios, publicPath)
  }
  return {
    provide: {
      api: repositories
    }
  }
})
