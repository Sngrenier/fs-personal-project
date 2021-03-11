import React, { Component } from 'react'
import Title from '../Title'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'
import {AuthProvider} from '../../context/newAuthContext'


export default class Profile extends Component {
    render() {
        return (
            <AuthProvider>
            <div className="py-5">
                <div className="container">
                    <Title name="your" title="profile" />

                    <div className="column">
                        <div className="col-1">
                            <input 
                            className="input-btn"
                            placeholder = {`Your name`}
                            />
                            <input 
                            className="input-btn"
                            placeholder = {`email`}
                            />
                            <input 
                            className="input-btn"
                            placeholder = {`phone number`}
                            />
                            <input 
                            className="input-btn"
                            placeholder = {`street address`}
                            />
                            </div>
                            <div className="col-2">
                            <img className= "prof-img" alt="prof-img" src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M2_Hero?wid=1125&fmt=jpeg&qlt=85" width={500}></img>
                            </div>
                            </div>
                            <div className="update-profile">
                            <Link to="/">
                                    <ButtonContainer>
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
                            </AuthProvider>

        
        )
    }
}
