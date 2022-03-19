import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PrimaryButton from "../components/PrimaryButton"
import useStore from "../context/StoreContext"
import useInput from "../utils/useInput"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const { addVariantToCart, addToLiked } = useStore()
  const bind = useInput(1)

  return (
    <Layout>
      <Wrapper className="ml-20">
        <img
          src={product.images[0]?.src}
          className="w-full h-auto rounded-3xl object-cover"
        />
        <InfoContainer>
          <Title className="text-lg md:text-2xl ">{product.title}</Title>
          <Subtitle>{product.priceRangeV2.maxVariantPrice.amount}0$</Subtitle>
          <p>{product.description}</p>
          <InputForm>
            <Subtitle className="text-sm md:text-2xl ">
              <label htmlFor="qty">Quantity:</label>
            </Subtitle>
            <Input placeholder="1" id="qty" type="number" {...bind} />
          </InputForm>
          <PrimaryButton
            text="Add to cart"
            onClick={() => addVariantToCart(product, bind.value)}
          />
          <PrimaryButton
            text="Add to favorites"
            onClick={() => addToLiked(product)}
          />
        </InfoContainer>
      </Wrapper>
    </Layout>
  )
}

export default ProductTemplate

const Wrapper = styled.div`
  margin: 40px;
  display: grid;
  gap: 20px;
  grid-template-columns: 80px auto;
  @media (min-width: 600px) {
    grid-template-columns: 200px auto;
  }
  @media (min-width: 800px) {
    grid-template-columns: 300px auto;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 400px auto;
  }
`

const InfoContainer = styled.div`
  display: grid;
  align-items: flex-start;
  height: fit-content;
  gap: 10px;

  p {
    margin: 0;
  }
`

const Title = styled.h1`
  margin: 0;
`

const Subtitle = styled.p`
  font-weight: bold;
  max-width: 500px;
`

const InputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: fit-content;
  gap: 20px;
  align-items: center;
  gap: 10px;
`

const Input = styled.input`
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  max-width: 80px;
  font-size: 12px;
  :focus {
    outline: none;
    outline-color: #014c40;
  }
`
