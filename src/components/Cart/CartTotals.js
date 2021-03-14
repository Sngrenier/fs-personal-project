import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'
import {ProductContext as context} from '../../context/context'



export default function CartTotals({value, history}) {
    const [subTotal, setSubTotal] = useState(0)
    
    const cartContext = useContext(context)

    useEffect(() => {
        console.log('context', cartContext.cart)
        setSubTotal(cartContext.cart.reduce((acc, curr) => { 
            console.log('addtotals', curr)
            return acc += +curr.price * curr.quantity}, 0))
    },[cartContext.cart])


    // const addTotals = () => {
    //     console.log('addtotals')
    //     let subTotal = this.state.cart.reduce((acc, curr) => { 
    //         console.log('addtotals', curr)
    //         return acc += +curr.price}, 0)
    //     const tempTax = subTotal * 0.0875
    //     const tax = parseFloat(tempTax.toFixed(2))
    //     const total = +subTotal + +tax
    //     this.setState({
    //         cartSubTotal: subTotal,
    //         cartTax: tax,
    //         cartTotal: total
    //     })
    // }

  
   const {clearCart} = value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to ='/'>
                            <button 
                            className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button"
                            onClick={()=>clearCart()}
                            >
                            clear cart
                            </button>
                        </Link>
                        <h5><span className="text-title"> subtotal: </span><strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(subTotal)}</strong></h5>
                        <h5><span className="text-title"> tax: </span><strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(subTotal * .0875)}</strong></h5>
                        <h5><span className="text-title"> total: </span><strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(subTotal * 1.0875)}</strong></h5>
                        <PayPalButton total={subTotal * 1.0875} clearCart={clearCart} history={history} />  
                    </div>
                </div>
            </div>
        </React.Fragment>
            
    )
}
