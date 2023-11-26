import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { GlobalProvider } from './context/GlobalState'
import { UserProvider } from './context/UserContext/UserState'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <>
      <GlobalProvider>
        <UserProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </UserProvider>
      </GlobalProvider>
    </>
  )
}

export default App
