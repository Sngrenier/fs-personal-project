import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer, ProductContext} from '../../context/context'
import CartList from './CartList'
import CartTotals from './CartTotals'


class Cart extends Component {

    componentDidMount(){
        let values= this.context
        values.getCart()
    }


    render() {


        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value
                        console.log(cart)
                        // useEffect(() => {
                        //     console.log('hello')
                        // },[])
                        if (cart.length > 0){
                            return(
                            <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} history={this.props.history} />
                            </React.Fragment>
                            )
                        }else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
Cart.contextType=ProductContext

export default Cart