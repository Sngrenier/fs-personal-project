import React, { Component } from 'react'
// import Slider from 'react-elastic-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import {Link} from 'react-router-dom'
import './ImageSlide.css'

export default class ImageSlide extends Component {
//   state = {
//     items: [
//       {id: 1, img: {img.id[1]}},
//       {id: 2, title: 'item #2'},
//       {id: 3, title: 'item #3'}
//     ]
//   }

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

    // const { items } = this.state;
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
                        <h5>caption</h5>
                        <p>subcaption</p>
                    </div>
                    </Link>
                </div>

                <div>
                    <Link to="/productList" className="carousel-link">
                    <img 
                    className="img-slider" 
                    src="https://secure.img1-fg.wfcdn.com/im/04516976/c_crop-h625-w1600%5Ecompr-r85/9333/93336818/default_name.jpg" 
                    alt="img" />
                    <div class="carousel-caption">
                        <h5>caption</h5>
                        <p>subcaption</p>
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
                        <h5>caption</h5>
                        <p>subcaption</p>
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
// https://d31dpzy4bseog7.cloudfront.net/media/2019/12/04130623/Conrad_Architects_Daracombe_Kew_07.jpg
// https://2lin3i1bbign2l2t392v1pxd-wpengine.netdna-ssl.com/wp-content/uploads/bfi_thumb/Dimension-Fine-Homes-Susse-Budde-Minyard-Living-Fall-View-Web-np07jj8e1cwlc4zsq9qua9k0wdant1u17ff2eag31s.jpg