import {useState, createContext} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const AuthContext = createContext()
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    const {push}=useHistory()

    const register = (username, password, email, first_name, last_name, phone_number, setErrorMsg) => {
        axios.post('/api/auth/register', {username, password, email, first_name, last_name, phone_number})
        .then(res => {
            setUser(res.data)
            push('/')
        }).catch(error => setErrorMsg('Username Taken!'))
    }

    const login = (username, password, setErrorMsg) => {
        axios.post('/api/auth/login', {username, password})
        .then(res => {
            setUser(res.data)
            push('/')
        }).catch(error => setErrorMsg('Please register to log in.'))
    }
    
    const logout = () => {
        axios.post('/api/auth/logout')
        .then(_ =>{
                push('/')
        })
    }
    

    return(
        <AuthContext.Provider
        value={{user, setUser, register, login, logout}}
        >
            {props.children}
        </AuthContext.Provider>
    )

    }
