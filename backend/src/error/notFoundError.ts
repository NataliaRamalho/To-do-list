export class NotFoundError extends Error {
  constructor(msg?: string) {
    const Msg = msg || 'Dado não encontrado'
    super(Msg)
  }
}
