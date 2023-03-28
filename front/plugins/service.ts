import ArticlesService from '~/services/ArticlesService'

export default (ctx: any, inject: any) => {
  const services = {
    articles: new ArticlesService(ctx.$axios),
  }

  inject('services', services)
}
