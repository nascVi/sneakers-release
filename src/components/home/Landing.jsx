import React from 'react'
import Creative from '../Creative'
import { creatives } from '../../data/creatives'
import { Fade } from 'react-reveal'

const Landing = () => {
    const notYetCrea = creatives.filter(creative => creative.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Creative {...notYetCrea} />
                <Fade bottom duration={800}>
                    <div className="landing__video-container">
                        <h1>PRODUIT QUE NOUS INSTALLONS SOUVENT</h1>
                        <img className="landing__video" src="/img/linky-vieux-compteur.jpg" alt="vidéo produit de gamme" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Landing
