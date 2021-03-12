import {useState, createContext} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const AuthContext = createContext()
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    const {push}=useHistory()

    const register = (username, password, setErrorMsg) => {
        const profile_pic = `https://robohash.org/${username}.png`
        axios.post('/api/auth/register', {username, password, profile_pic}).then(res => {
            setUser(res.data)
            push('/profile')
        }).catch(error => setErrorMsg('Username Taken!'))
    }

    const login = (username, password, setErrorMsg) => {
        axios.post('/api/auth/login', {username, password}).then(res => {
            setUser(res.data)
            push('/profile')
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
