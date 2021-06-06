import { ICoreMessage } from './interfaces'
import { GUID } from './utils' // @Todo move to a shared library

export class CoreMessage implements ICoreMessage {
  id: string
  body: string
  createdAt: Date = new Date()
  modifiedAt: Date = new Date()

  constructor(body: string) {
    this.id = GUID()
    this.body = body
  }

  protected touch() {
    this.modifiedAt = new Date()
  }
}
