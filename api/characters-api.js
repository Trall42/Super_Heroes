export default ($axios, $config) => ({
  getCharacters(id) {
    const apiUrl = $config.apiUrl
    const accessToken = $config.accessToken
    return $axios.get(`${apiUrl}/api.php/${accessToken}/${id}`)
  },
  searchCharacters(payload) {
    return $axios.get(`${apiUrl}/api.php/${accessToken}/search/${payload}`)
  }
})
