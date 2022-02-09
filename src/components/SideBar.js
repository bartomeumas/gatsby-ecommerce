import React from "react"
import { Link } from "gatsby"

import { FaShoppingCart, FaTshirt } from "react-icons/fa"
import { GiShorts, GiBilledCap } from "react-icons/gi"
import { AiFillHome, AiFillLike } from "react-icons/ai"
import { MdLogin, MdLogout } from "react-icons/md"

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col  bg-gray-900 text-white shadow-lg z-10">
      <Link to="/" exact>
        <SideBarIcon
          icon={<AiFillHome size="28" />}
          text="Inicio"
        ></SideBarIcon>
      </Link>
      <Link to="/cart">
        <SideBarIcon
          icon={<FaShoppingCart size="28" />}
          text="Carrito"
        ></SideBarIcon>
      </Link>
      <Link to="/liked">
        <SideBarIcon
          icon={<AiFillLike size="28" />}
          text="Favoritos"
        ></SideBarIcon>
      </Link>
      <Link to="/products">
        <SideBarIcon
          icon={<FaTshirt size="28" />}
          text="Camisetas"
        ></SideBarIcon>
      </Link>
      <Link to="/gorras">
        <SideBarIcon
          icon={<GiBilledCap size="28" />}
          text="Gorras"
        ></SideBarIcon>
      </Link>
      <Link to="/pantalones">
        <SideBarIcon
          icon={<GiShorts size="28" />}
          text="Pantalones"
        ></SideBarIcon>
      </Link>
      <Link to="/login">
        <SideBarIcon icon={<MdLogin size="28" />} text="Login"></SideBarIcon>
      </Link>
    </div>
  )
}

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)

export default SideBar
