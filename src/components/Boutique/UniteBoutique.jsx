import React, { Component } from 'react';
import Quants from '../ui/Quants';
import Prix from '../ui/Prix';
import Button from '../ui/Button'
import { Fade } from 'react-reveal';

class UniteBoutique extends Component {
    state = {
        quantErr: false,
        selectedQuant: '',
        choisi: false,
    }

    handleChoix = () => {
        const {selectedQuant, quantErr} = this.state;
        if (!selectedQuant && !quantErr) {
            this.setState({quantErr: true});
        }
        else {
            this.setState({choisi: true})
        }
    }
    
    handleQuantChange = e => {
        const selectedQuant = e.target.innerText;
        this.setState({selectedQuant, QuantErr: false})
    }

    render() {
        const {url, type, nom, prix, quants} = this.props;
        const {quantErr, selectedQuant, choisi} = this.state;
        return (
            <div className={`boutique__unite ${choisi ? 'boutique__unite--favorite' : ''}`}>
                <img src={url} alt={type} className="shop__img" />
                <div className="boutique__nom">{nom}</div>
                <div className="boutique__prix">{prix}€</div>
                <div className="boutique__details">
                    {(quantErr && !selectedQuant) && (
                        <Fade duration={500}>
                            <div className="boutique__quant-error">
                                Please select a size first
                            </div>
                        </Fade>
                    )}
                    <Quants clickHandler={this.handleQuantChange} quants={quants} selectedQuant={selectedQuant} />
                    <Prix />
                </div>
                <Button clickHandler={this.handleChoix} text={choisi ? 'Dans le dossier' : 'Choix'} />
            </div>

        );
    }
}

export default UniteBoutique;
