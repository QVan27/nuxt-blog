import ArticlesService from '~/services/ArticlesService'
import UsersService from '~/services/UsersService'

export default (ctx: any, inject: any) => {
  const services = {
    articles: new ArticlesService(ctx.$axios),
    users: new UsersService(ctx.$axios),
  }

  inject('services', services)
}
