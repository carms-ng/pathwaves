import React from "react"
import PropTypes from "prop-types"

import Typography from "../styles/Typography"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children, noFooter }) => (
  <>
    <Typography />
    <GlobalStyles />

    <main>{children}</main>
    {!noFooter && <Footer />}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
}

Layout.defaultProps = {
  noFooter: false,
}
export default Layout
