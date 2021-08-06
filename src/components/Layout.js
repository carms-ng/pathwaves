import React from "react"
import PropTypes from "prop-types"

import Typography from "../styles/Typography"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children, noFooter, lang, slug }) => (
  <>
    <Typography />
    <GlobalStyles />
    <Header lang={lang} slug={slug} />
    <main>{children}</main>
    {!noFooter && <Footer lang={lang} />}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
}

Layout.defaultProps = {
  noFooter: false,
  lang: 'en',
}
export default Layout
