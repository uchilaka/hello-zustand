import React from 'react';

import Alerts from './features/alerts'
import AlertMessage from './features/alerts/models/AlertMessage';

import { useAppStore } from './store'

function App() {
  // @Todo we'll consume this later to update the state
  const store = useAppStore()

  function demoAlert() {
    const newAlert = new AlertMessage('Hello simple state!')
    store.publishAlert(newAlert)
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
