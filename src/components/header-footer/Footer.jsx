import React from 'react'
import Socials from '../ui/Socials'
import { useScrollToTop } from '../hooks/scrollToTop';

const Footer = (props) => {
    const setScrollToTop = useScrollToTop(true);
    return (
        <footer className="footer">
            <div className="wrapper wrapper--footer">
                {/* <div>
                </div> */}
                <div 
                className="pro-ref-logo"
                key={props}
                onClick={() => setScrollToTop(true)}
                >

                </div>
                <div className="footer__contactForm">
                    <h3>SAV</h3>
                </div>
                <div className="footer__contactForm">
                    <h3>Mentions Legales</h3>
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
