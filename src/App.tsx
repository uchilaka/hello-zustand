import React from 'react';

import Alerts from './features/alerts'
import AlertMessage from './features/alerts/models/AlertMessage';

import { useAppStore } from './store'

function App() {
  const publishAlert = useAppStore(state => state.publishAlert)

  function demoAlert() {
    publishAlert(new AlertMessage('Hello simple state!'))
  }

  return (
    <>
      <h1>Hello Persisted State</h1>

      <button onClick={demoAlert}>Pop random alert</button>

      <Alerts />
    </>
  );
}

export default App;
