export interface AuditableObject {
  createdAt: Date
  modifiedAt: Date
}

export interface CoreMessage extends AuditableObject {
  id: string
  title?: string
  body: string
}

// eslint-disable-next-line no-shadow
export enum AlertMessageSeverity {
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info'
}

export interface IAlertMessage extends CoreMessage {
  severity: AlertMessageSeverity
}

export interface AlertStateSlice {
  alerts: IAlertMessage[]
}
