import React from "react"
import PropTypes from "prop-types"

import Typography from "../styles/Typography"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Typography />
    <GlobalStyles />

    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
