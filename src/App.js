import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

const FIRST_RED = ["my cat", "the dog", "his wife"]
const SECOND_BLUE = ["became a detective", "woke up with a red face", "jumped into oblivion"]
const THIRD_PURPLE = ["on Monday morning", "while eating breakfast", "in the middle of nowhere"]

function App() {
  const [logLine, generateLogLine] = useState('');
  const random = arr => arr[Math.floor(Math.random() * arr.length)]

  return (
    <div className="App">
      <h1>Logline Generator</h1>
      <h2>Always wanted to make a log line? Click this button and our magical generator will do the heavy lifting for you.</h2>
      <button onClick={() => generateLogLine(random(FIRST_RED) + ' ' + random(SECOND_BLUE) + ' ' + random(THIRD_PURPLE))}>
        Generate!
      </button>
      {logLine}
    </div>
  )
}

export default App
