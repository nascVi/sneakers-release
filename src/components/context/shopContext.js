import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: '2c49b90c1216e44241e1ca93ee8b5945',
    domain: 'https://shoesonenow.myshopify.com/'
})

class ShopProvider extends Component {
    
    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        this.creatCheckout()
    }

    creatCheckout = async () => {
        const checkout = await client.checkout.create()
        this.setState({checkout: checkout })
        // console.log(checkout)
    }

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
            variantId,
            quantity: parseInt(quantity, 10)
            }
        ]
        const checkout = await client.checkout.addLineItems(
            this.state.checkout.id, 
            lineItemsToAdd
        )

    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        this.setState({ products: products })
    }

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id)
        this.setState({ product: product })
    }

    closeCart = () => { this.setState({ isCartOpen: false }) }

    openCart = () => { this.setState({ isCartOpen: true })

    }


    render() {
        return (
            <ShopContext.Provider value={{
            ...this.state,
            fetchAllProducts: this.fetchAllProducts,
            fetchProductWithId: this.fetchProductWithId,
            closeCart: this.closeCart,
            openCart: this.openCart,
            addItemToCheckout: this.addItemToCheckout
            }} >
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider