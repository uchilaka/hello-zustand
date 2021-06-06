import { IAlertMessage } from './interfaces'
import { GUID } from './utils'
import DayJS from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat' // @Todo explore publishing through formatter context

import styled from 'styled-components'

DayJS.extend(LocalizedFormat)

export type AlertProps = {
  items: IAlertMessage[]
}

const AlertContainer = styled.div`
  .timestamp, .message { 
    display: block;
  }

  .timestamp {
    font-size: smaller;
    color: gray;
  }
`

// Alert Container with formatting

export default function Alerts({ items = [], }: AlertProps) {
  return (
    <>
      <h2>Alerts</h2>
      {items.map(alert => (
        <AlertContainer key={GUID('alert')}>
          <span className="message">{alert.body}</span>
          <span className="timestamp">{DayJS(alert.createdAt).format('LLL')}</span>
        </AlertContainer>
      ))}
    </>
  )
}
