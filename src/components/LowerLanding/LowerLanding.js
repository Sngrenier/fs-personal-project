import React, { Component } from 'react'
import './LowerLanding.css'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../NavButton'

export default class LowerLanding extends Component {
    render() {
        return (
            <div>

            <section className="section1">
            <div className="container-fluid py-5 lower-landing">
                <div className="first-set">
                        <div className="landing-img1">
                        <img className= "l-img1" alt="img-1" src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M2_Hero?wid=1125&fmt=jpeg&qlt=85"></img>
                        </div>
                        <div className="landing-img2 text-center">
                        <img className="l-img2" alt="img-2" src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M2_Alt?wid=672&fmt=jpeg&qlt=85"></img>
                            <p className="landing-img-text-1">ASPEN</p>
                            <p className="landing-img-text-2">A GEM OF THE ROCKIES SET BY THE ROARING FORK RIVER AMID SOARING, SNOW-CAPPED PEAKS. AN ICONIC RETREAT, RENOWNED FOR SKIING AND CHIC APRÈS. RICH IN HISTORY AND A MECCA FOR MUSIC, FROM THE SILVER BOOM TO SYMPHONIES OF STRAVINSKY. ASPEN IS RELAXED MOUNTAIN LIVING</p>
                            <Link to="/productList">
                                    <ButtonContainer>
                                        EXPLORE CHAIRS
                                    </ButtonContainer>
                                </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section2">
            <div className="container-fluid py-5 lower-landing">
                <div className="first-set">
                        <div className="landing-img1">
                        <img className= "l-img1" alt="img-1" src="https://fabric.imgix.net/02.25.21+Pink+Intelligence+HP/HP_PinkIntelligence_Feature_1.jpg?w=510&auto=format"></img>
                        </div>
                        <div className="landing-img2 text-center">
                        <img className="l-img2" alt="img-2" src="https://abchome-xpm-images.s3.amazonaws.com/CLP+Images/Dining+CLP/010721+Dining+CLP/DiningCLP_Feature_4.jpg?w=510&auto=format"></img>
                            <p className="landing-img-text-1">TIBET</p>
                            <p className="landing-img-text-2">TIBET DEVLOPED A BEAUTIFUL AND UNIQUE CULTURE DUE TO ITS GEOGRAPHIC AND CLIMATE CONDITIONS. WHILE INFLUENCED BY NEIGHBORING CULTURES CHINA, INDIA, AND NEPAL, THE HIMALAYAN REGION'S REMOTENESS HAS PRESERVED AND STIMULATED THE DEVELOPMENT OF ITS DISTINCT CULTURE.</p>
                            <Link to="/productList">
                                    <ButtonContainer>
                                        EXPLORE SOFAS
                                    </ButtonContainer>
                                </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3">
            <div className="container-fluid py-5 lower-landing">
                <div className="first-set">
                        <div className="landing-img1">
                        <img className= "l-img1" alt="img-1" src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M3_Hero?wid=1125&fmt=jpeg&qlt=85"></img>
                        </div>
                        <div className="landing-img2 text-center">
                        <img className="l-img2" alt="img-2" src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M3_Alt?wid=672&fmt=jpeg&qlt=85"></img>
                            <p className="landing-img-text-1">TAOS</p>
                            <p className="landing-img-text-2">CANYON, MESA, SUMMIT. FROM THE RIO GRANDE GORGE TO THE SANGRE DE CRISTO MOUNTAINS, THE ANCIENT PUEBLO TO THE MODERN PLAZA. PAST ARROYO SECO, WHEELER PEAK’S TOWERING VERTICAL OFFERS TRANSCENDENT RUNS. COPPER MINING TO ART COLONY, THE TRUE SOUL OF THE SOUTHWEST.</p>
                            <Link to="/productList">
                                    <ButtonContainer>
                                        EXPLORE FINISHINGS
                                    </ButtonContainer>
                                </Link>
                        </div>
                    </div>
                </div>
            </section>
         </div>     
        )
    }
}