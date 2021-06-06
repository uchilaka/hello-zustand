import { IAlertMessage } from "./features/alerts/interfaces";
import { CoreMessage } from "./features/messages/models";

// eslint-disable-next-line no-shadow
export enum SupportedEnvironments {
  DEV = 'development',
  PROD = 'production'
}

export interface RollbarConfig {
  accessToken: string
  async: boolean
  captureUncaught: boolean
  captureUnhandledRejections: boolean
  payload: {
    environment: SupportedEnvironments
  }
}

declare global {
  interface Window {
    _rollbarConfig?: RollbarConfig
  }
}

export interface StoreHash<T> {
  ids: string[]
  items: Record<string, T>
}



interface AppDataHelpers {
  publishAlert: (newAlert: IAlertMessage) => void
  // toggleSafeNavigation: (block: boolean) => void
  setDestinationURL: (url: string) => void
  // resetSafeNavigation: () => void
}

export type AppDataStore = AppDataHelpers & Record<string, unknown> & {
  alerts: StoreHash<IAlertMessage>
  messages: StoreHash<CoreMessage>
  blockNavigation?: boolean
  destinationURL?: string
  [k: string]: unknown
}
