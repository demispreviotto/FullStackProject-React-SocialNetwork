import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { GlobalProvider } from './context/GlobalState'
import { UserProvider } from './context/UserContext/UserState'

function App() {

  return (
    <>
      <GlobalProvider>
        <UserProvider>
          <Router>
            {/* <h1>Hello</h1> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </UserProvider>
      </GlobalProvider>
    </>
  )
}

export default App
