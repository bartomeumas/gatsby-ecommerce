import React from "react"
import { Carousel } from "react-bootstrap"

import camisetas from "../assets/images/camisetas.jpg"
import gorras from "../assets/images/gorras.jpg"
import pantalones from "../assets/images/pantalones.jpg"

import "./BootstrapCarousel.css"

export default function BootstrapCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="carousel-item ">
        <img className="min-vh-100 " src={camisetas} alt="Camisetas" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="min-vh-100 " src={gorras} alt="Gorras" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="min-vh-100 " src={pantalones} alt="Pantalones" />
      </Carousel.Item>
    </Carousel>
  )
}
