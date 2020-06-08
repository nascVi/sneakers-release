import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import ApolloClient from 'apollo-client' 
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { createHttpLink } from 'apollo-link-http'
// import { ApolloProvider } from '@apollo/react-hooks'

import Home from './components/home/Home'
import Shoesone from './components/Shoesone'
import './main.scss'
import Custom from './components/Custom'
import Cleaning from './components/Cleaning'
import Boutique from './components/Boutique/Boutique'


import Footer from './components/header-footer/Footer'
import Header from './components/header-footer/Header'

import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import ShopProvider from './components/context/shopContext'

// const httpLink = new createHttpLink({
    //     uri: "https://localhost:5000"
    //   });
    
    // const client = new ApolloClient({
        //     link: httpLink,
        //     cache: new InMemoryCache()
        // });
        
const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const Routes = () => (
    <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
            <BrowserRouter>
            {/* <ApolloProvider client={client}> */}
                <Route path="/" render={props => (props.location.pathname !== '/') && <Header/> }/>
                <Route exact path="/" component={Home} />
                <Route exact path="/shoesone" component={Shoesone} />
                {/* <Route path="/product/:id"> */}
                <Route exact path="/boutique" component={Boutique} />
                {/* </Route> */}
                <Route exact path="/custom" component={Custom} />
                <Route exact path="/cleaning" component={Cleaning} />
                <Footer />
            {/* </ApolloProvider> */}
            </BrowserRouter>
        </StyletronProvider>
    </ShopProvider>
)



ReactDOM.render(<Routes />, document.getElementById('root'))
