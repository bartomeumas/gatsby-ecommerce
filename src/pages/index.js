import * as React from "react"

import SideBar from "../components/SideBar"
import Seo from "../components/seo"
import BootstrapCarousel from "../components/BootstrapCarousel"

const IndexPage = () => (
  <div>
    <SideBar />
    <Seo title="Home" />
    <div style={{ overflow: "hidden", maxHeight: "100vh" }}>
      <BootstrapCarousel />
    </div>
  </div>
)

export default IndexPage
