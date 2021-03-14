import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Auth.css'
import {ButtonContainer} from '../NavButton'
import {AuthContext} from '../../context/newAuthContext'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    const values = useContext(AuthContext)

    const closeErrorMessage = () => {
        setErrorMsg(false)
    }

    return(
        <section>
        <div className="navbar fixed-top">
        <div className="container-fluid">
          <nav>
            <ul>
              <div>
              <Link to='/'>
                <img src="https://img.icons8.com/small/32/000000/home.png" alt='home' className="nav-brand" />
                </Link>
              </div>
            </ul>
          </nav>
        </div>
        </div>
      <div className='auth'>
        <div className='auth-container'>
          <h3 className='auth-title'>Welcome!</h3>
          {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}>X</span></h3>}
          <div className='auth-input-box'>
            <p>Username:</p>
            <input value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className='auth-input-box'>
            <p>Password: </p>
            <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='auth-button-container'>
          <ButtonContainer 
          className='dark-button' 
          id="new-auth-log-btn"
          onClick={()=> values.login(username, password, setErrorMsg)}
          >Login 
          </ButtonContainer>
            <Link to='/profile'>
              <ButtonContainer
            className='dark-button'
            id="new-auth-reg-btn"
            // onClick={()=> values.register(username, password, setErrorMsg)}
             >Register 
            </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
      </section>
    )

}
export default Auth