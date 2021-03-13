import React from 'react'
import Title from '../Title'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'
import {useContext} from 'react'
import {AuthContext} from '../../context/newAuthContext'
import axios from 'axios'

// import {Redirect} from 'react-router-dom'
// import {useState} from 'react'


const Profile =()=> {

    const {user} = useContext(AuthContext)
    console.log(user)

        return (
            <div className="py-5">
                <div className="container">
                    <Title name="your" title="profile" />

                    <div className="column">
                        <div className="col-1">
                            <input 
                            className="input-btn"
                            placeholder = {`first name`}
                            />
                            <input 
                            className="input-btn"
                            placeholder = {`last name`}
                            />
                            <input 
                            className="input-btn"
                            placeholder = {`email`}
                            />
                            <input 
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
                                    <ButtonContainer onClick={()=>axios.post(`/api/auth/register`).then()}>
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