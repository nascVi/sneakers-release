import React from 'react'
import { boutique } from '../../data/boutique'
import { Fade } from 'react-reveal'
import UniteBoutique from './UniteBoutique'

const Boutique = (id) => {
    const knitsBoutique = boutique.filter(unite => unite.type === 'knits');
    const jordansBoutique = boutique.filter(unite => unite.type === 'jordans');
    const maxsBoutique = boutique.filter(unite => unite.type === 'maxs');
    const zoomsBoutique = boutique.filter(unite => unite.type === 'zooms');

    const renderUnites = unitesBoutique => (
        unitesBoutique.map((uniteBoutique, i) => <UniteBoutique {...uniteBoutique} key={i} />)
    )
    return (
        <div className="wrapper">
            <div className="boutique">
                <h1>Les Produits en boutique</h1>
                <Fade left delay={id*80}>
                    <br />
                    <h3>Jordans</h3>
                    <div className="boutique__range">
                        {renderUnites(jordansBoutique)}
                    </div>
                </Fade>
                <Fade right delay={id*80}>
                    <br />
                    <h3>Maxs</h3>
                    <div className="boutique_range">
                        {renderUnites(maxsBoutique)}
                    </div>
                </Fade>
                <Fade right delay={id*80}>
                    <br />
                    <h3>Knits</h3>
                    <div className="boutique__range">
                        {renderUnites(knitsBoutique)}
                    </div>
                </Fade>
                <Fade left delay={id*80}>
                    <br />
                    <h3>Zooms</h3>
                    <div className="boutique_range">
                        {renderUnites(zoomsBoutique)}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Boutique
