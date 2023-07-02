import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserProvider'

const Navbar = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <>
            {
                user ? (
                    <>
                        <Link to='/'>Inicio</Link>
                        <button onClick={() => setUser(false)}>Logout</button>
                    </>
                ) : (

                    <Link to='/login'>Login</Link>
                )
            }
        </>
    )
}

export default Navbar