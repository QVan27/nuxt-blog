export default class Users {
  id?: string
  name?: string
  password?: string
  role?: string

  constructor(id?: string, name?: string, password?: string, role?: string) {
    this.id = id
    this.name = name
    this.password = password
    this.role = role
  }
}
