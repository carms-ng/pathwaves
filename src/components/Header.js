import React from 'react'
import styled from 'styled-components'
import LocalizedLink from './LocalizedLink'


export default function Header({ lang, slug }) {
  const toLang = lang === 'en' ? 'fr' : 'en'

  const to = slug === "home" ? "/" : `/${slug}`

  return (
    <HeaderStyles>
      <LocalizedLink lang={toLang} to={to} text={toLang} />
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  padding: 3vw;
  a {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: var(--black);
  }
`
