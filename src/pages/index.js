import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BootstrapCarousel from "../components/BootstrapCarousel"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <BootstrapCarousel />
    </div>
  </Layout>
)

export default IndexPage
