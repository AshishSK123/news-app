import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Alert from './components/Alert';
import './App.css'


export default function App() { 

  const apikey = process.env.REACT_APP_NEWS_API
  // console.log(apikey)
  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light');

  // toggle mode to change the background and Text color on click 
  function toggleMode() {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
      showAlert("Dark mode enabled")
    } else {
      document.body.style.backgroundColor = 'white'
      setMode('light');
      showAlert("Light mode enabled")
    }
  }

  // function to log message
  const [msg, setMsg] = useState(null);

  function showAlert(message) {
    setMsg(message)
    setTimeout(() => {
      setMsg(null);
    }, 1500)
  }
  return (
    <>
      <Router>
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert msg={msg} />

        <div className="container" >
          <Routes>
            <Route exact path="/" element={<Container setProgress={setProgress} apikey={apikey} category="global" />}></Route>
            <Route exact path='/About' element={<About mode={mode} />}></Route>
            <Route exact path="/entertainment" element={<Container setProgress={setProgress} key="Entertainment" apikey={apikey} category="entertainment" />}></Route>
            <Route exact path="/business" element={<Container setProgress={setProgress} key="business" apikey={apikey} category="business" />}></Route>
            <Route exact path="/general" element={<Container setProgress={setProgress} key="general" apikey={apikey} category="general" />}></Route>
            <Route exact path="/health" element={<Container setProgress={setProgress} key="Health" apikey={apikey} category="health" />}></Route>
            <Route exact path="/science" element={<Container setProgress={setProgress} key="science" apikey={apikey} category="science" />}></Route>
            <Route exact path="/sports" element={<Container setProgress={setProgress} key="sports" apikey={apikey} category="sports" />}></Route>
            <Route exact path="/technology" element={<Container setProgress={setProgress} key="technology" apikey={apikey} category="technology" />}></Route>
          </Routes>
        </div>
      </Router>
    </>

  )
}
