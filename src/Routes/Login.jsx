import React, { useContext } from 'react'
import {UserContext} from '../Context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const navegate = useNavigate()

  const handleClickLogin = () => {
    setUser(true)
    navegate('/')
  }
  return (
    <>
    Login 
    <h2>
      {
        user ? 'En linea' : 'Ofline'
      }
    </h2>
    <button onClick={handleClickLogin}>Acceder</button>
    </>
    
  )
}

export default Login

// <button onClick={() => setUser(true)}>Acceder</button>
// Esta es una manera más facil de hacerlo