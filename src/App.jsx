import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import NewPost from './components/Posts/NewPost/NewPost'
import { GlobalProvider } from './context/GlobalState'
import { UserProvider } from './context/UserContext/UserState'
import { PostProvider } from './context/PostContext/PostState'
import PostPage from './components/Posts/PostPage/PostPage'
import { CommentProvider } from './context/CommentsContext/CommentsState'

function App() {

  return (
    <>
      <GlobalProvider>
        <UserProvider>
          <PostProvider>
            <CommentProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/newPost" element={<NewPost />} />
                  <Route path="/post/:postId" element={<PostPage />} />
                </Routes>
                <Navbar />
              </Router>
            </CommentProvider>

          </PostProvider>
        </UserProvider>
      </GlobalProvider>
    </>
  )
}

export default App
