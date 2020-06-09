import React from "react"
import Product from "./Product"
// import Title from "../Globals/Title"
import { graphql } from "apollo-boost"

const getProducts = graphql`
  {
    products: allContentfulShoesOneProduct {
      edges {
        node {
          id
          title
          price
          size
          image {
            fluid(maxHeight: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Les Sneakers" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
