import React from 'react'
import Realisation from '../Realisation'
import { realisations } from '../../data/realisations'
import { Fade } from 'react-reveal'

const Landing = () => {
    const notYetRea = realisations.filter(realisation => realisation.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Realisation {...notYetRea} />
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
