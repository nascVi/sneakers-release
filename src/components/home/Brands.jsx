import React from "react"
import { StaticQuery, gql } from "graphql"
// import Brand from "./Brand"
import { Fade } from 'react-animate-on-scroll'

const getBrands = gql`
  {
    brands: allContentfulShoesOneBrands {
      edges {
        node {
          title
          id
          image {
            fluid(maxHeight: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          info {
            id
            info
          }
          price
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default function Brands() {
  return (
    <StaticQuery
      query={getBrands}
      render={data => {
        return (
          <section className="">
            <div className="container">
              <Fade 
                animateIn="fadeIn"
                animateOnce={true}
                initiallyVisible={false}
              >
                <h1>Notre choix des marques"</h1>
              </Fade>
              <div className="">
                {data.brands.edges.map(({ node: brand }) => {
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}