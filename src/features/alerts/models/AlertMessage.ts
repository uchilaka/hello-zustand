import { AlertMessageSeverity } from '../interfaces'
import { CoreMessage } from '../../messages/models'

export default class AlertMessage extends CoreMessage {
  severity: AlertMessageSeverity

  constructor(body: string, severity = AlertMessageSeverity.INFO) {
    super(body)
    this.severity = severity
    this.touch()
  }
}
