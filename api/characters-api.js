export default ($axios, $config) => ({
  getCharacters(id) {
    return $axios.get(`${$config?.apiUrl}/api.php/1370317413561611/${id}`)
  },
  searchCharacters(payload) {
    return $axios.get(`${$config?.apiUrl}/api.php/1370317413561611/search/${payload}`)
  }
})