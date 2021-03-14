import React from 'react'
import Title from '../Title'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'
import {AuthContext} from '../../context/newAuthContext'
import {useState, useContext} from 'react'



const Profile =()=> {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')

    const values = useContext(AuthContext)



        return (
            <div className="py-5">
                <div className="container">
                    <Title name="your" title="profile" />

                    <div className="column">
                        <div className="col-1">
                        <input 
                            value = {username}
                            onChange={e => setUsername(e.target.value)}
                            className="input-btn"
                            placeholder = {`username`}
                            />
                            <input 
                            value = {password}
                            onChange={e => setPassword(e.target.value)}
                            className="input-btn"
                            placeholder = {`password`}
                            type="password"
                            />
                            <input 
                            value = {firstName}
                            onChange={e => setFirstName(e.target.value)}
                            className="input-btn"
                            placeholder = {`first name`}
                            />
                            <input 
                            value = {lastName}
                            onChange={e => setlastName(e.target.value)}
                            className="input-btn"
                            placeholder = {`last name`}
                            />
                            <input 
                            value = {email}
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            className="input-btn"
                            placeholder = {`email`}
                            />
                            <input 
                            value = {phoneNumber}
                            type = "tel"
                            onChange={e => setphoneNumber(e.target.value)}
                            className="input-btn"
                            placeholder = {`phone number`}
                            />
                            </div>
                            <div className="col-2">
                            <img className= "prof-img" alt="prof-img" src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M2_Hero?wid=1125&fmt=jpeg&qlt=85" width={500}></img>
                            </div>
                            </div>
                            <div className="update-profile">
                            <Link to="/">
                                    <ButtonContainer 
                                    // onClick={this.sendEmail}
                                    // onClick={()=>axios.post(`/api/welcomeEmail`).then()}
                                    onClick={()=> values.register(username, password, email, firstName, lastName, phoneNumber)}
                                    >
                                        save changes
                                    </ButtonContainer>
                                </Link>
                                <Link to="/">
                                    <ButtonContainer>
                                        cancel
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>

        
        )
    }

export default Profile