
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GameScreen from "./components/GameScreen";
import Settings from "./components/Settings"
import About from "./components/About"



function App() {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark')) === 'dark' || true)

  function setHighContrast() {
    return alert("Unavailable!")
  }

  function toggleDarkMode() {


    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('dark', JSON.stringify('light'))
    } else {
      localStorage.setItem('dark', JSON.stringify('dark'))
      document.documentElement.classList.remove('dark')
    }

  }

  return (
    <div className={"App mx-auto justify-center max-w-md h-screen overflow-hidden"}>
      <Router>
        <Routes>
          <Route index element={<GameScreen />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
