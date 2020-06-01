import React from 'react'
import Creative from './Creative'
import { creatives } from '../data/creatives'

const Custom = () => {
    return (
        <div className="wrapper">
            {creatives.map(creative => <Creative key={creative.id} {...creative} />)}
        </div>
    )
}

export default Custom
