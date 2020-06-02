// Brands became BRAND.jsx !!!!!

import React from "react"
// import { StaticQuery, gql } from "graphql"
// import Brand from "./Brand"
import { Fade } from 'react-reveal'

// const getBrands = gql`
//   {
//     brands: allContentfulShoesOneBrands {
//       edges {
//         node {
//           title
//           id
//           image {
//             fluid(maxHeight: 500) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           info {
//             id
//             info
//           }
//           price
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
// `

function Brand(id, image, price, date, info, title) {
  return (
    // <StaticQuery
    //   query={getBrands}
    //   render={data => {
    //     return (
          <section>
            <div className="wrapper">
              <Fade>
              <h1>Notre choix des marques</h1>
              </Fade>
              <div className="brand">
                {/* {data.brands.edges.map(({ node: brand }) => {
                })} */}
                <a href="/#">
                    <img src={image} alt="brand_label"/>
                </a>
                <h2>{title}</h2>
                <h4>{price}</h4>
              </div>
            </div>
          </section>
    //     )
    //   }}
    // />
  )
}

export default Brand