import { AlertMessageSeverity, IAlertMessage } from '../interfaces'
import { GUID } from '../utils' // @Todo move to a shared library

export default class AlertMessage implements IAlertMessage {
  id: string

  body: string

  createdAt: Date = new Date()

  modifiedAt: Date = new Date()

  severity: AlertMessageSeverity

  constructor(body: string, severity = AlertMessageSeverity.INFO) {
    this.id = GUID()
    this.body = body
    this.severity = severity
    this.touch()
  }

  private touch() {
    this.modifiedAt = new Date()
  }
}
