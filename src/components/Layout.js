import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import EqualWeb from "./EqualWeb";

import Typography from "../styles/Typography";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, noFooter, lang, slug, settings }) {
  const {
    logo,
    nav: { navItems, menuAuth, btnContact },
  } = settings;

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Equal Web Widget */}
      <Helmet defer>
        <script>{EqualWeb}</script>
      </Helmet>
      <Typography />
      <GlobalStyles />
      <Header
        lang={lang}
        slug={slug}
        logo={logo}
        navItems={navItems}
        menuAuth={menuAuth}
        btnContact={btnContact}
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>{children}</main>
      {!noFooter && <Footer lang={lang} menuAuth={menuAuth} />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  lang: PropTypes.string,
};

Layout.defaultProps = {
  noFooter: false,
  lang: "en",
};
export default Layout;
