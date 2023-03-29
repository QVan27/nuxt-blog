export default class UsersService {
  axios: any
  constructor($axios: any) {
    this.axios = $axios
  }

  findAll() {
    return this.axios({
      method: 'get',
      url: 'http://localhost:4000/users/getUser',
    }).then((response: any) => {
      return response.data
    })
  }
}
