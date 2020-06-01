import React from 'react'
import { boutique } from '../../data/boutique'
import { Fade } from 'react-reveal'
import UniteBoutique from './UniteBoutique'

const Boutique = (id) => {
    const compteursBoutique = boutique.filter(unite => unite.type === 'compteurs');
    const cablesBoutique = boutique.filter(unite => unite.type === 'cables');
    const kitsDomotiqueBoutique = boutique.filter(unite => unite.type === 'kitsDomotiques');
    const coffretsBoutique = boutique.filter(unite => unite.type === 'coffrets');

    const renderUnites = unitesBoutique => (
        unitesBoutique.map((uniteBoutique, i) => <UniteBoutique {...uniteBoutique} key={i} />)
    )
    return (
        <div className="wrapper">
            <div className="boutique">
                <h1>MATERIEL QUE NOUS RECOMMANDONS</h1>
                <Fade right delay={id*80}>
                    <h3>COMPTAGES & GESTION</h3>
                    <div className="boutique__range">
                        {renderUnites(compteursBoutique)}
                    </div>
                </Fade>
                <Fade left delay={id*80}>
                    <br />
                    <h3>APPAREILLAGE & MODULES</h3>
                    <div className="boutique__range">
                        {renderUnites(cablesBoutique)}
                    </div>
                </Fade>
                <Fade right delay={id*80}>
                    <br />
                    <h3>KITS DOMOTIQUES</h3>
                    <div className="boutique_range">
                        {renderUnites(kitsDomotiqueBoutique)}
                    </div>
                </Fade>
                <Fade left delay={id*80}>
                    <br />
                    <h3>DISTRIBUTION D'ENERGIE</h3>
                    <div className="boutique_range">
                        {renderUnites(coffretsBoutique)}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Boutique
