import React from 'react'
import Fade from 'react-reveal/Fade'

const Realisation = ({ id, title, year, lifletUrl, favoris, budjet, piclist }) => {

    const renderPics = () => {
        return piclist.map((pic, i) => {
            return <li key={i} className="realistion__pic"> <i></i> <span>{pic}</span></li>
        })
    }

    return (
        <Fade left delay={id * 80} duration={900}>
            <div className="realisation">
                <div className="realisation__caption">
                    <h1>{title}</h1>
                    {favoris ? null : <div className="realisation__year">{year}</div>}
                </div>
                <img src={lifletUrl} className="realisation__liflet" alt="Realisation livret" />

                <div className="realisation__info">
                    {favoris ? <div className="realisation__en-favoris">Favoris</div> : null}
                    <div className="realisation__budjet">
                        <div className="realisation__budjet-item"><span>Installation Häger</span> €{budjet.häger}</div>
                        <div className="realisation__budjet-item"><span>Linky</span> €{budjet.enedis}</div>
                        <div className="realisation__budjet-item"><span>Domotique Legrand</span> €{budjet.legrand}</div>
                    </div>
                    <div className="realisation__selection">
                        {renderPics()}
                    </div>
                    <div className="realisation__carroussel">
                        <div className="realisation__trackline-container">
                            <div className="realisation__timing">--:--</div>
                            <div className="realisation__trackline"></div>
                            <div className="realisation__timing">--:--</div>
                        </div>
                        <div className="realisation__play-buttons">
                            <div className="realisation__prev"></div>
                            <div className="realisation__next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Realisation
