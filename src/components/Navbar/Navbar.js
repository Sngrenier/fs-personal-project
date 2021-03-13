import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import axios from 'axios'
// import {AuthContext} from '../../context/newAuthContext'
// import styled from 'styled-components'




function Navbar() {

    // const {user} = useContext(AuthContext)
 // filterProducts = this.state.products.filter( item => {
    //     return this.state.product.name.toLowerCase().includes( this.state.userInput.toLowerCase())
    // })
  
    // filteredProducts = (item) => {
    //     const product = this.state.products.filter(item => {
    //         return this.state.product.name.toLowerCase().includes(this.state.userInput.toLowerCase())
    //     }) 
    //     return product
    // } 

    // handleSearch = () => {
    //     this.props.handleSearch(this.state.userInput)
    // }

    // handleClear = () => {
    //     this.setState({userInput: ''})
    //     this.props.handleSearch('')
    // }

    
        // const{username, email, profile_pic, first_name, last_name, phone_number} = user
    // console.log('Navbar', user)
        return(
            <section className="navbar">
            <div className="navbar-expand-sm px-sm-5">
            <nav className="navbar-expand-sm px-sm-5 navbar container-fluid search-bar">
                <ul className="navbar-nav align-items-center">
                
                <div className="nav-item home-icon">
                <Link to='/'>
                <img src="https://img.icons8.com/small/32/000000/home.png" alt='store' className="navbar-brand" />
                </Link>
                </div>

                {/* <div className="nav-item search-container">
                    <li className="nav-item ml-5 nav-item">
                    <input className="input-btn"
                value={this.props.userInput}
                placeholder = {`Search`}
                onChange={(e) => this.props.filteredProducts(e)}
                />
               <div className="search-buttons">
                    <button className="clear-btn" onClick={this.props.postSearch}>Search</button> 
                    <button className="clear-btn" onClick={this.props.getTempProducts}>View All</button>
                </div>
                    </li>
                </div> */}
                
                <div className="nav-item brand-name">
                <li className="nav-item ml-5">
                    <h3 className="brand-name">MARBLE OAK</h3>
                </li>
                </div>

                <div className="nav-item profile-icon">
                <li className="nav-item ml-5">
                <Link to="/profile" className="ml-auto">
                <img src="https://img.icons8.com/plumpy/48/000000/user-female-circle.png" alt='profile' className="navbar-profile"/>
                </Link>
                </li>
                </div>

                <div className="nav-item greeting">
                <li className="nav-item ml-5">
                    <p className="nav-hello">Welcome!</p>
                    <Link to="/auth" className="ml-auto">
                    <button className="nav-login">LOGIN OR REGISTER</button>
                    </Link>
                    </li>
                    <li>    
                    <Link to="/">
                    <button className="nav-login" onClick={()=>axios.post(`/api/auth/logout`).then()}>LOGOUT</button>
                    </Link>
                </li>
                </div>

                <div className="nav-item tote-icon">
                <li className="nav-item ml-5">
                <Link to="/cart" className="ml-auto">
                <img src="https://img.icons8.com/ios/32/000000/shopping-bag--v1.png" alt='tote' className="navbar-tote"/>
                </Link>
                </li>
                </div>

                </ul>
                </nav>
               </div>
            </section>
        )
    }
    export default Navbar





