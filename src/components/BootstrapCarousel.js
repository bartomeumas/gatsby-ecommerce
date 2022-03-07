import React from "react"
import { Carousel } from "react-bootstrap"

import tshirts from "../assets/images/camisetas.jpg"
import caps from "../assets/images/gorras.jpg"
import pants from "../assets/images/pantalones.jpg"

import "./BootstrapCarousel.css"

export default function BootstrapCarousel() {
  return (
    <Carousel className="carousel relative" variant="dark ">
      <Carousel.Item className="carousel-item ">
        <img src={tshirts} alt="Tshirts" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Shirts</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <img src={caps} alt="Caps" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Caps</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <img src={pants} alt="Pants" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Pants</h5>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
