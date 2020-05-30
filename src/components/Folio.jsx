import React from 'react'
import { folio } from '../data/folio'
import Button from './ui/Button'
import { Flip } from 'react-reveal'

const Folio = () => {
    return (
        <div className="wrapper">
            <div className="folio">
                {folio.map((folioItem, i) => {
                    const {day, month, location} = folioItem
                    return (
                        <Flip delay={i*80} right key={i}>
                            <div className="folio__item">
                                <div className="folio__date">
                                    <div className="folio__day">
                                        {day}
                                    </div>
                                    <div className="folio__month">
                                        {month}
                                    </div>
                                </div>
                                <div className="folio__details">
                                    <div className="folio__location">
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

export default Folio
