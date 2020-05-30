import React from 'react'
import Info from './Info'
import Socials from '../ui/Socials'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper wrapper--footer">
                <div className="footer__logos">
                </div>
                    <div className="pro-ref-logo"></div>
                <div className="footer__contactForm">
                    <h3>PRISE DE CONTACT</h3>
                    <Info />
                </div>
                <div className="footer__social">
                    <h3>RESEAUX SOCIAUX</h3>
                    <Socials />
                    <div className="footer__copy">
                        ©2020 Varela Electricité - lpChamps` make
                    </div>
                </div>
                <br />
            </div>
        </footer>
    )
}

export default Footer
