export default class ArticlesService {
  axios: any
  constructor($axios: any) {
    this.axios = $axios
  }

  findAll() {
    return this.axios({
      method: 'get',
      url: 'http://localhost:4000/articles/getArticle',
    }).then((response: any) => {
      return response.data
    })
  }
}
