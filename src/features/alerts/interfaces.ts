import { CoreMessage } from "../messages/models";

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
