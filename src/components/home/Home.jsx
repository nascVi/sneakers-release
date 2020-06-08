import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { Container, Text, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'


import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'

import img from './jojos.png'

import ReactParticles from 'react-particles-js'
// import * as contentful from 'contentful'
import { Element,scroller } from 'react-scroll'
import { Fade } from 'react-reveal'

import Info from '../Info'
import Brand from './Brand'
import Landing from './Landing'
import Contact from '../Contact'

const Particles = ({ children }) => {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={{
        particles: {
              number: {
                value: 81
              },
              size: {
                value: 3
              },
              shape:{
                type: "edge"
              },
              color: {
                value: "#000000"
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
        },
      interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
        },
      retina_detect: true
      }}
          style={{
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
        {children && <div style={{ position: 'relative' }}>{children}</div>}
      </div>
    );
}

// const client = require('contentful').createClient({
//   space: "rw6a7adgd9jf",
//   accessToken:"gdss2r8osTVxqx8ijgmUDrroXrAm1jlM_mTZYaA"
// });

function InaSpace({ children }) {
    return (
        <div className="innerSpace">
            <div className="iS-body">{children}</div>
            {/* Check main for mobiles responsives */}
        </div>
    );
}
  
const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)
  
  const scrollToLanding = elem => {
      scroller.scrollTo(elem, {
          duration: 800,
          delay: 100,
          smooth: true
      })
  }
  
  useEffect(() => {
    fetchAllProducts()
    return () => {

    };
  }, [fetchAllProducts])

  if(!products) return <div>Loading...</div>

  // const [ShoesOneBrands, setShoesOneBrands] = useState([])
  
  // useEffect(() => {
  //   async function fetchEntries() {
  //     const entries = await client.getEntries()
  //     if (entries.items) return entries.items
  //     console.log(`Error getting Entries for ${ShoesOneBrands}.`)
  //   }

  //   async function getShoesOneBrands() {
  //     const allShoesOneBrands = await fetchEntries()
  //     setShoesOneBrands([...allShoesOneBrands])
  //   }
  //   getShoesOneBrands()
  // }, [ShoesOneBrands])



    return (
      <Particles>
        <div className="home">
            <Fade>
                <div className="home__hero">
                    <BackgroundVideo className="backgroundVid" />
                    <div className="wrapper">
                        <div className="logo"></div>
                        <Nav context="home" />
                        <div className="home__caption" onClick={() => scrollToLanding('landing')}>
                            <img src={img} className="airForce1" alt="af1" />
                        </div>
                        <h6 className="home__caption-hint">Sneakers par excellence<span className="home__coffee" role="img" aria-label="coffee"></span></h6>
                        <div className="home__scroll-down" onClick={() => scrollToLanding('footer')} ></div>
                    </div>
                </div>
                <InaSpace />
                <Element name="landing">
                <Element name="brand">
                  <Container>
                    <Row>
                      {products.map(product => (
                        <Col key={product.id}>
                          <Link to={'/product'}>
                      {/* {ShoesOneBrands.length > 0
                        ? ShoesOneBrands.map(p => (
                          <Brand
                          alt={p.fields.alt}
                          date={p.fields.date}
                          key={p.fields.title}
                          image={p.fields.image}
                          title={p.fields.title}                      
                          />
                          ))
                        : null} */}
                        {test}
                        </Link>
                        </Col>
                        ))}
                      </Row>
                     </Container>
                  </Element>
                  <Landing />
                </Element>
                <Element name="info">
                  <Info />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
            </Fade>
        </div>
      </Particles>
    )
}

export default Home
