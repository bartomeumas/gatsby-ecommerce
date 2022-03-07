import React from "react"
import { Link } from "gatsby"

import { FaShoppingCart, FaTshirt } from "react-icons/fa"
import { GiShorts, GiBilledCap } from "react-icons/gi"
import { AiFillHome, AiFillLike, AiFillShopping } from "react-icons/ai"

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col  bg-gray-900 text-white shadow-lg z-10">
      <Link to="/" exact>
        <SideBarIcon icon={<AiFillHome size="28" />} text="Home"></SideBarIcon>
      </Link>
      <Link to="/cart">
        <SideBarIcon
          icon={<FaShoppingCart size="28" />}
          text="Cart"
        ></SideBarIcon>
      </Link>
      <Link to="/liked">
        <SideBarIcon
          icon={<AiFillLike size="28" />}
          text="Favorites"
        ></SideBarIcon>
      </Link>
      <Link to="/products">
        <SideBarIcon
          icon={<AiFillShopping size="28" />}
          text="Products"
        ></SideBarIcon>
      </Link>
      <Link to="/shirts">
        <SideBarIcon icon={<FaTshirt size="28" />} text="Shirts"></SideBarIcon>
      </Link>
      <Link to="/caps">
        <SideBarIcon icon={<GiBilledCap size="28" />} text="Caps"></SideBarIcon>
      </Link>
      <Link to="/pants">
        <SideBarIcon icon={<GiShorts size="28" />} text="pants"></SideBarIcon>
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
