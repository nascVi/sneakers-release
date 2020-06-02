import React from 'react'
import { Link } from "react-router-dom"
import Button from './ui/Button';
import { Fade } from 'react-reveal'

const Info = (id) => {
    return (
        <Fade>
        <div className="info">
            <div className="wrapper">
                <div className="info_vershoesone">
                    <h1>Shoesone972</h1>
                    <p className="info__greatings">
                    BEL BONJOU, BIENVENU sur shoesone972.com
                    <br />
                    le 1er site de destockage de sneakers en Martinique
                    </p>
                </div>
                    <Link to="/shoesone">
                    <Button className="info__button" text="Shoesone" context="home" />
                    </Link>
            </div>
        </div>    
        </Fade>
    )
}

export default Info
