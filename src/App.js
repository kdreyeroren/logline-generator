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

  function handleDownloadClick() {
    console.log("handleDownloadClick")
    var foo = navigator.mediaDevices.getDisplayMedia({video: true})
    foo.then((stream) => {
      console.log("user media permissions accepted")
      const video = document.getElementById("v")
      const canvas = document.getElementById("canvas")
      console.log(video, canvas)

      video.srcObject = stream
      const ctx = canvas.getContext("2d")
      ctx.drawImage(video, 0, 0)
      const img = canvas.toDataURL("image/png")
      alert("done")
    })
  }

  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`
  }

  return (
    <div className="App">
      <video id="v"/>
      <canvas id="canvas" width="480" height="320" />
      <header className="AppHeader">
        <div className="AppHeaderContent">
          <h1>Logline Generator</h1>
          <p>Always wanted to make a log line? Click this button and our magical generator will do the heavy lifting for you.</p>
        </div>
      </header>
      <main className="Main">
        <button className="Button" onClick={handleButtonClick}>
          Generate!
        </button>
        <section className="MainSection">
          <div className="Image" style={backgroundImage}>
            <p className="Logline">
              {logLine}
            </p>
          </div>
          <button className="Button" onClick={handleDownloadClick}>
            Download your meme!
          </button>
        </section>
      </main>
      <footer class="AppFooter">
        Made by Katya & Samus across the globe
      </footer>
    </div>
  )
}

export default App
