export default ($axios, $config) => ({
  getCharacters(id) {
    return $axios.get(`https://www.superheroapi.com/api.php/1111/${id}`)
  },
  searchCharacters(payload) {
    return $axios.get(`https://www.superheroapi.com/api.php/1111/search/${payload}`)
  }
})
