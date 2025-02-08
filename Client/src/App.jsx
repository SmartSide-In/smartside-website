import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import About from './Pages/About'
import Service from './Pages/Service'
import Projects from './Components/Projects'
import Career from './Pages/Career'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App