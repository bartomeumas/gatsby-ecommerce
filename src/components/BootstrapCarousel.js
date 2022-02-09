import React from "react"
import { Carousel } from "react-bootstrap"

import camisetas from "../assets/images/camisetas.jpg"
import gorras from "../assets/images/gorras.jpg"
import pantalones from "../assets/images/pantalones.jpg"

import "./BootstrapCarousel.css"

export default function BootstrapCarousel() {
  return (
    <Carousel className="carousel relative" variant="dark ">
      <Carousel.Item className="carousel-item ">
        <img src={camisetas} alt="Camisetas" />
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <img src={gorras} alt="Gorras" />
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <img src={pantalones} alt="Pantalones" />
      </Carousel.Item>
    </Carousel>
  )
}
