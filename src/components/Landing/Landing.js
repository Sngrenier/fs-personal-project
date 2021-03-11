import React, { Component } from 'react'
import ImageSlide from './ImageSlide'
import LowerLanding from '../LowerLanding/LowerLanding'
// import ProductContainer from '../../components/ProductContainer'


export default class Landing extends Component {
    render() {
        return (
            <section>
            <div className="container-fluid landing">
                <ImageSlide />
            </div>
                <LowerLanding />
                <div>
                {/* <ProductContainer /> */}
                </div>
            </section>
                
        )
    }
}
