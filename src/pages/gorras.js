import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductCard from "../components/ProductCard"

const Gorras = ({ data }) => {
  const { nodes } = data.allShopifyProduct

  return (
    <Layout>
      <Seo title="Gorras" />
      <h1 className="text-black font-light main-title  mt-5 mb-2 text-center">
        Gorras
      </h1>
      <Wrapper>
        {nodes?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Wrapper>
    </Layout>
  )
}

export default Gorras

export const query = graphql`
  {
    allShopifyProduct(filter: { productType: { eq: "Hats" } }) {
      nodes {
        title
        handle
        variants {
          shopifyId
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        images {
          src
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  margin: 40px;
  grid-template-columns: repeat(4, auto);
  justify-content: left;
  gap: 40px;
  max-width: 1234px;
`
