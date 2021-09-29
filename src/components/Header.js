import React, { useContext } from 'react'
import styled from 'styled-components'
import LocalizedLink from './LocalizedLink'

import { Link } from 'gatsby';
import { IdentityContext } from '../../identity-context';

export default function Header({ lang, slug }) {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  // Prep Data for Language Switcher
  const toLang = lang === 'en' ? 'fr' : 'en'
  const to = slug === "home" ? "/" : `/${slug}`

  return (
    <HeaderStyles>
      {/* Header button */}
      <nav>
        {/* Open Login Modal  */}
        {
          !user &&
          <button className="btn" onClick={() => {
            netlifyIdentity.open()
          }}>Log In</button>
        }

        {/* Log user out */}
        {
          user &&
          <>
            <Link to="/app" className="btn">Calendar</Link>
            <Link to="/app/resource" className="btn">Resource</Link>

            <button className="btn" onClick={() => {
              netlifyIdentity.logout()
            }}>Log Out</button>
          </>
        }
      </nav>
      {/* Language Switcher */}
      <LocalizedLink className="switcher" lang={toLang} to={to} text={toLang} />
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vmin;

  > a {
    font-size: 1.6rem;
    backdrop-filter: blur(2em);
  }

  .switcher {
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    display: grid;
    place-content: center;
    text-transform: uppercase;
    color: var(--black);
    border-radius: var(--br);
    background: transparent;
    transition: var(--trans);

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
  .btn {
    display: block;
    font-weight: 400;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`
