import React from 'react'
import { cleaning } from '../data/cleaning'
import Button from './ui/Button'
import { Flip } from 'react-reveal'

const Cleaning = () => {
    return (
        <div className="wrapper">
            <div className="cleaning">
                {cleaning.map((cleaningItem, i) => {
                    const {day, month, location} = cleaningItem
                    return (
                        <Flip delay={i*80} right key={i}>
                            <div className="cleaning__item">
                                <div className="cleaning__date">
                                    <div className="cleaning__day">
                                        {day}
                                    </div>
                                    <div className="cleaning__month">
                                        {month}
                                    </div>
                                </div>
                                <div className="cleaning__details">
                                    <div className="cleaning__location">
                                        {location}
                                    </div>
                                    <Button text="CONSULTER"/>
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
