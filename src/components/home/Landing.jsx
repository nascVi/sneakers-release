import React from 'react'
import Boutique from '../Boutique/Boutique'
import { boutique } from '../../data/boutique'
import { Fade } from 'react-reveal'

import ReactPlayer from 'react-player'

const Landing = () => {
    const inShopNow = boutique.filter(boutique => boutique.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Boutique {...inShopNow} />
                <Fade bottom duration={800}>
                    <div className="landing__video-container">
                        <h1 className="landing__video-title">Au Programme sur place ou en livraison</h1>
                        <ReactPlayer
                            className="landing__video"
                            url="https://youtu.be/adzza_Tmrdg" 
                            playing="false"
                        />

                        {/* <img className="landing__video" src="https://www.youtube.com/watch?v=okwXffbEFJI" alt="vidéo produit de gamme" /> */}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Landing
