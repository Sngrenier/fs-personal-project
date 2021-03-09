// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// import './Auth.css'
// import {connect} from 'react-redux'
// import {updateUser} from './../../redux/reducer'
// // import {updateUser} from './../../redux/authReducer'
// // import Navbar from '../Navbar'

// class Auth extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       errorMsg: ''
//     }
//     this.login = this.login.bind(this);
//     this.register = this.register.bind(this);
//   }

//   handleChange(prop, val) {
//     this.setState({
//       [prop]: val
//     })
//   }

//   async login() {
//     const { username, password } = this.state
//     try {
//       const res = await axios.post('/api/auth/login', { username, password })
//       console.log('login', res.data)
//         this.props.updateUser(res.data)
//         this.props.history.push('/')
//     } catch {
//       this.setState({errorMsg: 'Incorrect username or password!'})
//     }
//   }

//   async register() {
//   const { username, password } = this.state
//   const profile_pic = `https://robohash.org/${username}.png`
//   try {
//     const res = await axios.post('/api/auth/register', { username, password, profile_pic })
//     console.log('register', res.data)
//       this.props.updateUser(res.data)
//       this.props.history.push('/')
//   } catch {
//     this.setState({errorMsg: 'Username taken!'})
//   }
// }

//   closeErrorMessage = () => {
//     this.setState({
//       errorMsg: false, 
//       username: '', 
//       password: ''
//     })
//   }

//   render() {
//     return (
//       <section>
//         <div className="navbar fixed-top">
//         <div className="container-fluid">
//           <nav>
//             <ul>
//               <div>
//               <Link to='/'>
//                 <img src="https://img.icons8.com/small/32/000000/home.png" alt='store' className="nav-brand" />
//                 </Link>
//               </div>
//             </ul>
//           </nav>
//         </div>
//         </div>
//       <div className='auth'>
//         <div className='auth-container'>
//           {/* <div className='auth-img'>
//           <img src={logo} alt='logo' />
//           </div> */}
//           <h3 className='auth-title'>Welcome!</h3>
//           {this.state.errorMsg && <h3 className='auth-error-msg'>{this.state.errorMsg} <span onClick={this.closeErrorMessage}>X</span></h3>}
//           <div className='auth-input-box'>
//             <p>Username:</p>
//             <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
//           </div>
//           <div className='auth-input-box'>
//             <p>Password: </p>
//             <input value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)} />
//           </div>
//           <div className='auth-button-container'>
//             <button className='dark-button' onClick={this.login}> Login </button>
//             <button className='dark-button' onClick={this.register}> Register </button>
//           </div>
//         </div>
//       </div>
//       </section>
//     );
//   }
// }

// export default connect(null, {updateUser})(Auth)



