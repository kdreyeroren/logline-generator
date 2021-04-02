import './App.css'
import { useState } from 'react'
import protagonists from './loglineItems/protagonists'
import actions from './loglineItems/actions'
import incitingIncidents from './loglineItems/incitingIncidents'

function App() {
  const [logLine, generateLogLine] = useState('');
  const [imageUrl, setImage] = useState('');
  const random = arr => arr[Math.floor(Math.random() * arr.length)]

  function handleButtonClick() {
    window.fetch('https://api.unsplash.com/photos/random?orientation=landscape&client_id=n8yJozd94Czklz138QJSwFTUWb60ozbkLuviF8Tr5jI').then((response) => {
      return response.json()
    }).then((data) => {
      const urlRegular = data['urls']['small']
      setImage(urlRegular)
      generateLogLine(random(protagonists) + ' ' + random(actions) + ' ' + random(incitingIncidents))
    })
  }

  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Logline Generator</h1>
        <h2>Always wanted to make a log line? Click this button and our magical generator will do the heavy lifting for you.</h2>
      </header>
      <main className="Main">
        <button className="Button" onClick={handleButtonClick}>
          Generate!
        </button>
        <section className="MainSection">
          <p>
            {logLine}
          </p>
          <img src={imageUrl} />
        </section>
      </main>
    </div>
  )
}

export default App
