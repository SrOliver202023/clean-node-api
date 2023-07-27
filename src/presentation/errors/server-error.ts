export class ServerError extends Error {
  constructor () {
    super('Inernal server error')
    this.name = 'ServerError'
  }
}
