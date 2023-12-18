import { handleHashing } from '../helpers/api-function'

export const useHeroes = defineStore("heroes", {
  state: () => {
    return {
      heroesData: [],
      isPending: false
    }
  },
  actions: {
    async getHeroes(page = 1) {
      console.log('Page', page)
      this.isPending = true
      this.heroesData = []
      const endPage = (page * 10)
      const startPage = (endPage - 9)
      try {
        for(let i = startPage; i <= endPage; i++) {
          const response = await useNuxtApp().$api.charactersApi.getCharacters(i)
          if (response.data.response === 'success') this.heroesData.push(response.data)
          else break
        }
      } catch (error) {
        console.log('Error', error)
      } finally {
        this.isPending = false
      }
      // this.products = await $fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').catch((error) => error.data)
      // this.products = await $fetch('https://fakestoreapi.com/products').catch((error) => error.data)
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHeroes, import.meta.hot))
}