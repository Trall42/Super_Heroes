export default ($axios, $config) => ({
  getCharacters(id) {
    return $axios.get(`${$config?.apiUrl}/api.php/${$config.accessToken}/${id}`)
  },
  searchCharacters(payload) {
    return $axios.get(`${$config?.apiUrl}/api.php/${$config.accessToken}/search/${payload}`)
  }
})