import {Component} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import {AuthContext} from '../context/newAuthContext'

class ProdHead extends Component {
    constructor() {
        super()
        this.state = {
        toggleShow: false
    }

}

toggleShowFunc = () => {
    this.setState( (prevState) => {
        return {
            toggleShow: !prevState.toggleShow
        }
    })
}

    render() {
    
    
    return ( <header className="container-fluid">
        <div className="product-header" >
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
            {/* need to add styling here to make this responsive - turn into a hamburger on small device */}
        <div className="category-names">
        <Link className="category-link" to='/'>
                <img src="https://img.icons8.com/small/32/000000/home.png" 
                alt='store' 
                // className="navbar-brand" 
                />
                </Link>
           <Link className="category-link" to='/productList' id="coll-btn">
                <span 
                className="nav-login">FULL COLLECTION</span>
            </Link>
            <Link className="category-link">
                    <h3 className="brand-name">MARBLE OAK</h3>
                </Link>
            {/* <Link className="category-link" to="/profile" >
                <img src="https://img.icons8.com/dotty/38/000000/test-account.png" 
                alt='profile' 
                />
            </Link> */}
            <div className="reg-buttons" >
            <Link className="category-link" to="/auth" id="reg-btn1">
                <a className="nav-login">LOGIN OR REGISTER</a>
            </Link> 
            <Link className="category-link" to="/" id="reg-btn2">
                    <a className="nav-login" 
                    onClick={()=>axios.post(`/api/auth/logout`)
                    .then()}>LOGOUT</a>
            </Link>
            </div>
            <Link 
                className="category-link" 
                to="/cart">
                <img src="https://img.icons8.com/ios/32/000000/shopping-bag--v1.png" 
                alt='tote' 
                // className="navbar-tote"
                />
            </Link>  
        </div>
        </nav>
                <span
                id="prod-btn"
                onClick={this.toggleShowFunc} 
                alt="menu-icon" 
                type="image" 
                > <i class="fas fa-bars"></i>
                </span>
        </div>
    </header>
    )
    }
}

export default ProdHead