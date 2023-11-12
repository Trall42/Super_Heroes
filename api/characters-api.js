export default ($axios, $config) => ({
  getCharacters(id) {
    // console.log('ApiTest', `${$config.apiUrl}${$config.apiPath}${$config.accessToken}/${id}`)
    // return $axios.get(`${$config.apiUrl}${$config.apiPath}/characters?ts=${seconds}&apikey=${$config.publickKey}&hash=${payload}&limit=100&offset=300`)
    return $axios.get(`${$config?.apiUrl}/api.php/${$config.accessToken}/${id}`)
  }
})