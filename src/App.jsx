import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Routes/Login'
import Home from './Routes/Home'
import Navbar from './Components/Navbar'
import RequireAuth from './Components/RequireAuth'

function App() {

  return (
    <>
      <Navbar />
      <h2>APP</h2>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
