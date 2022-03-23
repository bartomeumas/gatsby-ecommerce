import React from "react"
import styled from "styled-components"
import useStore from "../context/StoreContext"
import { IoMdTrash } from "react-icons/io"

const LikedProductRow = ({ item }) => {
  const { product } = item
  const { removeLikedItem } = useStore()

  return (
    <Wrapper>
      <ProductWrapper>
        <Image src={product.images[0]?.src} alt={product.title} />
        <Subtitle>{product.title}</Subtitle>
      </ProductWrapper>
      <DeleteButton
        onClick={() => removeLikedItem(product.variants[0]?.shopifyId)}
      >
        <IoMdTrash size="28" />
      </DeleteButton>
    </Wrapper>
  )
}

export default LikedProductRow

const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  align-items: center;
  grid-template-columns: repeat(3, 165px);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 344px);
  }
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  gap: 20px;
  align-items: center;
  width: 100px;
  @media (min-width: 600px) {
    width: 330px;
  }
  grid-template-columns: 80px auto;
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  @media (min-width: 600px) {
    width: 80px;
    height: 80px;
  }
  object-fit: cover;
  border-radius: 20px;
`

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;
`

const DeleteButton = styled.p`
  color: #a61b2b;
  font-size: 14px;
  cursor: pointer;
`
