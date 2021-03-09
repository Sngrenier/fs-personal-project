import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './context/context'
import {AuthProvider} from './context/newAuthContext'
import {Provider} from 'react-redux'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <ProductProvider>
    <Router>
    <AuthProvider>
    <App />
    </AuthProvider>
    </Router>
    </ProductProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();