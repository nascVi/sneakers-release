import React from 'react'
import Button from './ui/Button'
import { Fade } from 'react-reveal'

const Contact = () => {
    return (
        <Fade>
            <div className="wrapper">

            <div className="contact">
                <h1>Nous contacter</h1>
                <input type='text' name="" className="contact__address" placeholder="Your email" />
            </div>
            <div>
                <div className="contact__purpose">
                    <label type="text" name="" id="contact_purpstitle">
                        Je prendre contact:
                    </label>
                </div>
                            
                    <ul>
                    <li className="contact__purpslist-marker">
                    <input type="checkbox" className="contact__purpscheck" id="rdv" />
                    <label htmlFor="rdv téléphonique" className="">
                        concernant un litige
                    </label>
                    </li>

                    <li className="contact__purpslist-marker">
                    <input type="checkbox" name="" id="devis" />
                    <label htmlFor="devis" className="">
                        un suivi livraison
                        </label>
                    </li>
                    
                    <li className="contact__purpslist-marker">                    
                    <input type="checkbox" name="" id="entrepreneur" />
                    <label htmlFor="relation pro" className="">
                        Dans le cadre d'une relation professionnelle
                    </label>
                    </li>

                    </ul>
            </div>
            <Button type="submit" text="Valider" context="home" />
            </div>
        </Fade>
    )
}

export default Contact