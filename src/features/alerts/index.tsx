import { IAlertMessage } from './interfaces'
import DayJS from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat' // @Todo explore publishing through formatter context

import hashToArray from '../messages/utils'
import { useAppStore } from '../../store'
import { selectAlerts } from './selectors'
import Alert from './components/Alert'

DayJS.extend(LocalizedFormat)

export type AlertProps = {
  items: IAlertMessage[]
}

// Alert Container with formatting

export default function Alerts() {
  const alerts = useAppStore(selectAlerts)

  return (
    <>
      <h2>Alerts</h2>
      {hashToArray(alerts).map(({ body, createdAt }) => <Alert body={body} createdAt={createdAt} />)}
    </>
  )
}
