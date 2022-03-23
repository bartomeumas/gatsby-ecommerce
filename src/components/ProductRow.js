import React from "react"
import styled from "styled-components"

import useStore from "../context/StoreContext"
import { IoMdTrash } from "react-icons/io"

const ProductRow = ({ item }) => {
  const { removeLineItem } = useStore()
  const { quantity, product } = item

  return (
    <Wrapper>
      <ProductWrapper>
        <Image src={product.images[0]?.src} alt={product.title} />
        <Subtitle>{product.title}</Subtitle>
      </ProductWrapper>
      <Text>{quantity}</Text>
      <DeleteButton
        onClick={() => removeLineItem(product.variants[0]?.shopifyId)}
      >
        <IoMdTrash size="28" />
      </DeleteButton>
    </Wrapper>
  )
}

export default ProductRow

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 83px);
  gap: 20px;
  @media (min-width: 650px) {
    grid-template-columns: repeat(3, 208px);
    gap: 40px;
  }
  @media (min-width: 912px) {
    grid-template-columns: repeat(3, 338px);
    gap: 40px;
  }
  align-items: center;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 20px;
  align-items: center;
  width: 200px;
  @media (min-width: 912px) {
    width: 330px;
  }
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  @media (min-width: 650px) {
    width: 80px;
    height: 80px;
  }
  object-fit: cover;
  border-radius: 20px;
`

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  visibility: hidden;
  @media (min-width: 650px) {
    visibility: visible;
  }
`

const Text = styled.p`
  font-weight: bold;
  font-size: 14px;
`

const DeleteButton = styled.p`
  color: #a61b2b;
  font-size: 14px;
  cursor: pointer;
`
