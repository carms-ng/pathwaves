import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { EqualWeb } from "../components/EqualWeb"

import Typography from "../styles/Typography"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import Header from "./Header"

function Layout({ children, noFooter, lang, slug }) {
  return (
    <>
      {/* Equal Web Widget */}
      <Helmet defer={true} >
        <script>{EqualWeb}</script>
      </Helmet >
      <Typography />
      <GlobalStyles />
      <Header lang={lang} slug={slug} />
      <main>{children}</main>
      {!noFooter && <Footer lang={lang} />}
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
}

Layout.defaultProps = {
  noFooter: false,
  lang: 'en',
}
export default Layout
