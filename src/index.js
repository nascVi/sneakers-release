import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './components/home/Home'
import Shoesone from './components/Shoesone'
import './main.scss'
import Custom from './components/Custom'
import Cleaning from './components/Cleaning'
import Boutique from './components/Boutique/Boutique'


import Footer from './components/header-footer/Footer'
import Header from './components/header-footer/Header'


// Create Apollo Client
const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
  });

  client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

const Routes = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Route path="/" render={props => (props.location.pathname !== '/') && <Header/> }/>
            <Route exact path="/" component={Home} />
            <Route exact path="/shoesone" component={Shoesone} />
            <Route exact path="/boutique" component={Boutique} />
            <Route exact path="/custom" component={Custom} />
            <Route exact path="/cleaning" component={Cleaning} />
            <Footer />
        </BrowserRouter>
    </ApolloProvider>
)



ReactDOM.render(<Routes />, document.getElementById('root'))
