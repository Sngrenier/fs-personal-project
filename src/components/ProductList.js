import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context/context'
// import ProductFilter from './ProductFilter'


export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="full" title="collection" />

                    <div className="row">

                        <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
        )
    }
}
// import React from 'react'
// import Product from './Product'

// export default function ProductList({products}) {
//     return <section className="py-5">
//         <div className="container">
//             {
//                 products.map(item => {
//                     return <Product key={item.id} product={item} />
//                 })
//             }
//         </div>
//     </section>
// }