import React from "react"
import styled from "styled-components"

import useStore from "../context/StoreContext"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductRow from "../components/ProductRow"
import PrimaryButton from "../components/PrimaryButton"

const Cart = () => {
  const { cart, checkout } = useStore()

  return (
    <Layout>
      {console.log(cart)}
      <Seo title="Carrito" />
      <Wrapper>
        <HeaderWrapper>
          <Text>Producto</Text>
          <Text>Cantidad</Text>
          <Text>Eliminar</Text>
        </HeaderWrapper>
        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <Text>Tu carrito está vacío. Añade productos a tu carrito.</Text>
        )}
        <ButtonWrapper>
          <PrimaryButton
            text="Pagar"
            onClick={() => window.open(checkout.webUrl)}
            disabled={cart.length === 0}
          />
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Cart

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
