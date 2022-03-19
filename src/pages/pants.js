import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductCard from "../components/ProductCard"

const Pants = ({ data }) => {
  const { nodes } = data.allShopifyProduct

  return (
    <Layout>
      <Seo title="Pants" />
      <div className="ml-10">
        <h1 className="text-black font-light main-title  mt-5 mb-2 text-center">
          Pants
        </h1>
        <Wrapper className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-20 place-items-center">
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Wrapper>
      </div>
    </Layout>
  )
}

export default Pants

export const query = graphql`
  {
    allShopifyProduct(filter: { productType: { eq: "Pants" } }) {
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
  justify-content: left;
  max-width: 1234px;
`
