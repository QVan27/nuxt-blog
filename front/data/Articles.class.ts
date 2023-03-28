export default class Articles {
  id?: string
  title?: string
  author?: string
  content?: string
  date?: string

  constructor(
    id?: string,
    title?: string,
    author?: string,
    content?: string,
    date?: string
  ) {
    this.id = id
    this.title = title
    this.author = author
    this.content = content
    this.date = date
  }
}
