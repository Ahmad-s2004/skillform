import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/home3' element={<Home3/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

