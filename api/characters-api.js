export default ($axios, $config) => ({
  getCharacters(id) {
    const accessToken = $config.accessToken
    return $axios.get(`https://www.superheroapi.com/api.php/${accessToken}/${id}`)
  },
  searchCharacters(payload) {
    const accessToken = $config.accessToken
    return $axios.get(`https://www.superheroapi.com/api.php/${accessToken}/search/${payload}`)
  }
})
