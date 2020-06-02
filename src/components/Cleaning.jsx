import React from 'react'
import { cleaning } from '../data/cleaning'
import Button from './ui/Button'
import { Flip } from 'react-reveal'

const Cleaning = () => {
    return (
        <div className="wrapper">
            <div className="cleaning">
                {cleaning.map((cleaningItem, i) => {
                    const {name, url, description, disponible, prix} = cleaningItem
                    return (
                        <Flip delay={i*80} right key={i}>
                            <div className="cleaning__item">
                                <div className="cleaning__name">
                                {name}
                                    <div className="cleaning__thumbnail">
                                        <img src={url} alt={name} className="cleaning__img" />
                                    </div>
                                    <div className="cleaning__description">
                                        {description}
                                    </div>
                                </div>
                                <div className="cleaning__details">
                                    <div className="cleaning__disponible">
                                        {disponible}
                                    </div>
                                    <div className="cleaning__prix">
                                        {prix}€/h(si applicable)
                                    </div>
                                    <Button text="Booker"/>
                                </div>
                            </div>
                        </Flip>
                    )
                })}
            </div>
        </div>
    )
}

export default Cleaning
