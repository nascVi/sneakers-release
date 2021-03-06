import React, { /*useContext ,*/ useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'


import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'

import img from './jojos.png'

import ReactParticles from 'react-particles-js'
import * as contentful from 'contentful'
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
//   space: process.env.BOUTIQUE_APP_SPACE,
//   accessToken:process.env.BOUTIQUE_APP_ACCESS
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
  
  const scrollToLanding = elem => {
      scroller.scrollTo(elem, {
          duration: 800,
          delay: 100,
          smooth: true
      })
  }

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
                <Brand />
                Loading...
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
