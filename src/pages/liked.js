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
      {console.log(liked)}
      <Seo title="Favoritos" />
      <Wrapper>
        <HeaderWrapper>
          <Text>Producto</Text>
          <Text>Eliminar</Text>
        </HeaderWrapper>
        {liked.length > 0 ? (
          liked.map((item, index) => (
            <LikedProductRow key={index} item={item} />
          ))
        ) : (
          <Text>No tienes productos favoritos.</Text>
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
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
`

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`
