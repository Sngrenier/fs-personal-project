import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import {Link} from 'react-router-dom'
import './ImageSlide.css'

export default class ImageSlide extends Component {

  render () {
    const settings =  {
        showArrows: false,
        showStatus: false,
        arrowsBlock: false,
        autoPlay: true,
        infiniteLoop: true,
        // AutoPlaySpeed: 500,
        interval: 8000,
        transitionTime: 500,
        stopOnHover:true,
        // enableMouseSwipe: true,
        // pagination: true,
        outerSpacing: 0,
        dynamicHeight: true,
        showThumbs: false
        // wrap:true,
    }

    return (
        <section className="carousel">
        <div className="container-fluid slider">
            <Carousel {...settings}>
                
                <div>
                    <Link to="/productList" className="carousel-link">
                    <img 
                    className="img-slider carousel-link" 
                    src="https://i.pinimg.com/originals/41/c7/de/41c7de520b6d1636c447ce2db6f112b4.jpg" 
                    alt="img" />
                    <div class="carousel-caption">
                        <h5 className="cc-1">milano living</h5>
                        <p className="cc-2">features milano sectional and side poofs </p>
                    </div>
                    </Link>
                </div>

                <div>
                    <Link to="/productList" className="carousel-link">
                    <img 
                    className="img-slider" 
                    src="http://cdn.home-designing.com/wp-content/uploads/2015/11/pure-white-bedroom.jpg" 
                    alt="img" />
                    <div class="carousel-caption" id="caro-2">
                        <h5 className="cc-1">chalet bedroom collection</h5>
                        <p className="cc-2">retreat into luxurious scerenity</p>
                    </div>
                    </Link>
                </div>

                <div>
                    <Link to="/productList" className="carousel-link">
                    <img 
                    className="img-slider" 
                    src="https://media.architecturaldigest.com/photos/5852dba1001c874267ed3d3d/16:9/w_2560%2Cc_limit/Aspen-Home_04.jpg" 
                    alt="img" />
                    <div class="carousel-caption">
                        <h5 className="cc-1">agean sofa collection </h5>
                        <p className="cc-2">shown with ridgeline collection</p>
                    </div>
                    </Link>
                </div>
            </Carousel>
        </div>
        </section>
        )
    }
}



// OTHER PHOTO SRC OPTIONS:
// https://i.pinimg.com/originals/d5/9e/6d/d59e6d40b74fd812ba0d87c9b210e900.jpg
// https://cdn.mos.cms.futurecdn.net/QTWqLuHd6NaV9SMX8vLA5m-1200-80.jpg
// https://d31dpzy4bseog7.cloudfront.net/media/2019/12/04130623/Conrad_Architects_Daracombe_Kew_07.jpg
// https://2lin3i1bbign2l2t392v1pxd-wpengine.netdna-ssl.com/wp-content/uploads/bfi_thumb/Dimension-Fine-Homes-Susse-Budde-Minyard-Living-Fall-View-Web-np07jj8e1cwlc4zsq9qua9k0wdant1u17ff2eag31s.jpg