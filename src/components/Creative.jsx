
import React from 'react'
import Fade from 'react-reveal/Fade'

const Creative = ({ id, title, year, lifletUrl, favoris, budjet, piclist }) => {

    const renderPics = () => {
        return piclist.map((pic, i) => {
            return <li key={i} className="realistion__pic"> <i></i> <span>{pic}</span></li>
        })
    }

    return (
        <Fade left delay={id * 80} duration={900}>
            <div className="creative">
                <div className="creative__caption">
                    <h1>{title}</h1>
                    {favoris ? null : <div className="creative__year">{year}</div>}
                </div>
                <img src={lifletUrl} className="creative__liflet" alt="creative livret" />

                <div className="creative__info">
                    {favoris ? <div className="creative__en-favoris">Favoris</div> : null}
                    <div className="creative__budjet">
                        <div className="creative__budjet-item"><span>Installation Häger</span> €{budjet.häger}</div>
                        <div className="creative__budjet-item"><span>Linky</span> €{budjet.enedis}</div>
                        <div className="creative__budjet-item"><span>Domotique Legrand</span> €{budjet.legrand}</div>
                    </div>
                    <div className="creative__selection">
                        {renderPics()}
                    </div>
                    <div className="creative__carroussel">
                        <div className="creative__trackline-container">
                            <div className="creative__timing">--:--</div>
                            <div className="creative__trackline"></div>
                            <div className="creative__timing">--:--</div>
                        </div>
                        <div className="creative__play-buttons">
                            <div className="creative__prev"></div>
                            <div className="creative__next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Creative