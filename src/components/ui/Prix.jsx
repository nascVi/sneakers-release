import React, { Component } from 'react'

class Prix extends Component {

    state = {
        prix:1
    }


    incrementerPrix = () => {
        this.setState({prix: this.state.prix + 1})
    }

    decrementerPrix = () => {
        this.setState({prix: this.state.prix -1})
    }
    
    render() {
        return (
            <div className="prix">
                <span className="prix__change" onClick={this.incrementerPrix}>+</span>
                <span>{this.state.prix}</span>
                <span className="prix__change" onClick={this.decrementerPrix}>-</span>
            </div>
        )
    }
}

export default Prix;
