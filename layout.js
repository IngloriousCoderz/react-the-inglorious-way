import React from 'react'

import theme from './theme'

const footerStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  display: 'flex',
  padding: '1rem 2rem',
  justifyContent: 'space-between',
}

export default ({ children }) => {
  const { pathname, hash } = window.location

  return (
    <>
      {children}
      <footer style={footerStyle}>
        <a href={`${pathname}?theme=dark${hash}`} style={theme.link}>
          Dark
        </a>
        <a href={`${pathname}?theme=light${hash}`} style={theme.link}>
          Light
        </a>
      </footer>
    </>
  )
}
