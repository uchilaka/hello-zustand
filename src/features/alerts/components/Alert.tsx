import styled from 'styled-components'
import DayJS from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat' // @Todo explore publishing through formatter context

import { GUID } from '../../messages/utils';

DayJS.extend(LocalizedFormat)

const AlertContainer = styled.div`
  .timestamp, .message { 
    display: block;
  }

  .timestamp {
    font-size: smaller;
    color: gray;
  }
`

type AlertProps = {
  body: string,
  createdAt: Date,
}


export default function Alert({ body, createdAt }: AlertProps) {
  return (
    <AlertContainer key={GUID('alert')}>
      <span className="message">{body}</span>
      <span className="timestamp">{DayJS(createdAt).format('LLL')}</span>
    </AlertContainer>    
  )
}