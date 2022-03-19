import React from "react"
import styled from "styled-components"

import useStore from "../context/StoreContext"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LikedProductRow from "../components/LikedProductRow"

const Liked = () => {
  const { liked } = useStore()

  return (
    <Layout>
      <Seo title="Favorites" />
      <Wrapper className="ml-20">
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Remove</Text>
        </HeaderWrapper>
        {liked.length > 0 ? (
          liked.map((item, index) => (
            <LikedProductRow key={index} item={item} />
          ))
        ) : (
          <Text>You don't have any favorites.</Text>
        )}
      </Wrapper>
    </Layout>
  )
}

export default Liked

const Wrapper = styled.div`
  margin: 40px;
`

const HeaderWrapper = styled.div`
  display: grid;
  gap: 40px;

  grid-template-columns: repeat(3, 150px);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 330px);
  }
`

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`
