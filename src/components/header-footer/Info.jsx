import React from 'react'
import Button from '../ui/Button';

const Info = () => {
    return (
        <>
        <div className="contactForm">
            <input type='text' name="" id="" placeholder="Your email" />
            <select name="" id="">
                <option value="">Indiquer votre Commune</option>
            </select>
            
        </div>
        <div>
            <div className="contact__purpose">
                <label type="text" name="" id="purposes__title">
                    Je souhaite être rappelé:
                </label>
            </div>
                        
                        <ul>
                        <li>
                        <input type="checkbox" name="" id="rdv" />
                        <label htmlFor="rdv téléphonique" className="">
                            Pour un pemier contact
                        </label>
                        </li>
                        <li>
        
                        <input type="checkbox" name="" id="devis" />
                        <label htmlFor="devis" className="">
                            Une urgence ou un dégat
                            </label>
                        </li>
                        <li>                    
                        <input type="checkbox" name="" id="entrepreneur" />
                        <label htmlFor="relation pro" className="">
                            Dans le cadre d'une relation professionnelle
                        </label>
                        </li>
        
                        </ul>
        </div>
            <Button type="submit" text="Valider" context="footer" />
     </>
    )
}

export default Info
