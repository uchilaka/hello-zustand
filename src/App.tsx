import React from 'react';

import Alerts from './features/alerts'
import AlertMessage from './features/alerts/models/AlertMessage';

import { selectAlerts } from './features/alerts/selectors';
import hashToArray from './features/messages/utils';
import { useAppStore } from './store'

function App() {
  // @Todo we'll consume this later to update the state
  const appAlerts = useAppStore(selectAlerts)
  const publishAlert = useAppStore(state => state.publishAlert)

  function demoAlert() {
    publishAlert(new AlertMessage('Hello simple state!'))
  }

  return (
    <>
      <h1>Hello Persisted State</h1>

      <button onClick={demoAlert}>Pop random alert</button>

      <Alerts items={hashToArray(appAlerts)} />
    </>
  );
}

export default App;
