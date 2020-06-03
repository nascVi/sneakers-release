import React from 'react'
import { shoesone } from '../data/shoesone'
import {Fade} from 'react-reveal'

const Shoesone = () => {
    return (
        <div className="wrapper">
            <div className="shoesone">
                {shoesone.map((item, i) => {
                    const {year, url, title, text} = item;
                    return(
                        <Fade key={i}>
                            <div className="shoesone__item">
                                <div className="shoesone__year">{year}</div>
                                    <img src={url} alt="historique shoesone" className="shoesone__img" />
                                    <div className="shoesone__title">{title}</div>
                                <div className="shoesone__text">{text}</div>
                            </div>

                            Image goes here
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}

export default Shoesone
