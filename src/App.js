import './App.css'
import { useState } from 'react'
import protagonists from './loglineItems/protagonists'
import actions from './loglineItems/actions'
import incitingIncidents from './loglineItems/incitingIncidents'

function App() {
  const [logLine, generateLogLine] = useState('');
  const random = arr => arr[Math.floor(Math.random() * arr.length)]

  return (
    <div className="App">
      <h1>Logline Generator</h1>
      <h2>Always wanted to make a log line? Click this button and our magical generator will do the heavy lifting for you.</h2>
      <button onClick={() => generateLogLine(random(protagonists) + ' ' + random(actions) + ' ' + random(incitingIncidents))}>
        Generate!
      </button>
      {logLine}
    </div>
  )
}

export default App
