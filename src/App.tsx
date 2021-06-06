import React from 'react';

import Alerts from './features/alerts'
import AlertMessage from './features/alerts/models/AlertMessage';

import { selectAlerts } from './features/alerts/selectors';
import { useAppStore } from './store'
import hashToArray from './features/alerts/utils';

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
