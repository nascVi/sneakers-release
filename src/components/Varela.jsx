import React from 'react'
import { varela } from '../data/varela'
import {Fade} from 'react-reveal'

const Varela = () => {
    return (
        <div className="wrapper">
            <div className="varela">
                {varela.map((item, i) => {
                    const {year, url, title, text} = item;
                    return(
                        <Fade key={i}>
                            <div className="varela__item">
                                <div className="varela__year">{year}</div>
                                    <img src={url} alt="historique varela" className="varela__img" />
                                    <div className="varela__title">{title}</div>
                                <div className="varela__text">{text}</div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}

export default Varela
