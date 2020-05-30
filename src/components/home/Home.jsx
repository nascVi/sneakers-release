import React from 'react'
import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
import Landing from './Landing'
import { Element, scroller } from 'react-scroll'
import { Fade } from 'react-reveal'
import ReactParticles from 'react-particles-js'

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
              color: {
                value: "#4CD9E4"
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

function InaSpace({ children }) {
    return (
        <div className="innerSpace">
            <div className="iS-body">{children}</div>
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
                            JE CONSULTE?
                        </div>
                        <h6 className="home__caption-hint">Ou tick-tap/clickerais-je <span className="home__coffee" role="img" aria-label="coffee">☕</span>!?</h6>
                        <div className="home__scroll-down" onClick={() => scrollToLanding('footer')} ></div>
                    </div>
                </div>
                  <InaSpace>
                    <Element name="landing">
                        <Landing />
                    </Element>
                  </InaSpace>
            </Fade>
        </div>
      </Particles>
    )
}

export default Home
