import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: '',
    domain: ''
})

class ShopProvider extends Component {
    
    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }



    render() {
        return (
            <ShopContext.Provider value={{ ...this.state}} >
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider