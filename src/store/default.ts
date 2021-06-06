import create from 'zustand'
import { persist } from 'zustand/middleware'
import { IAlertMessage } from '../features/alerts/interfaces'
import { AppDataStore } from '../interfaces'

/**
 * 1. Simple state (DONE)
 * 2. Persisted state
 * 3. App-wide state with routing
 * 4. Persisted, app-wide state with routing
 * 5. Persisted, app-wide state with routing and Redux DevTools
 * 6. Persisted, app-wide state with routing, Redux DevTools and data contexts
 * 7. Persisted, app-wide state with routing, Redux DevTools and data contexts, and useEffect cleanups (via zustand subscribe / unsubscribe)
 */

const appStore = persist<AppDataStore>(set => ({
  alerts: { ids: [], items: {} },
  setDestinationURL(destinationURL: string) {
    set(({ alerts }) => ({
      alerts,
      destinationURL,
    }))
  },
  publishAlert(newAlert: IAlertMessage) {
    set(({ alerts }) => ({
      alerts: {
        ids: [
          ...alerts.ids,
          newAlert.id,
        ],
        items: {
          ...alerts.items,
          [newAlert.id]: newAlert,
        },
      },
    }))
  },
}), { name: 'AppStore', getStorage: () => localStorage })

const useAppStore = create<AppDataStore>(appStore)

export default useAppStore
