import { default as theme } from 'mdx-deck/themes'
// import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

import getStyle from './styles'

const tokens = window.location.search.slice(1).split('&')
const params = tokens.reduce((params, token) => {
  const [key, value] = token.split('=')
  params[key] = value
  return params
}, {})

export const styleName = params.theme || 'dark'
const style = getStyle(styleName)

export default {
  ...theme,

  h1: style.title,
  h2: style.title,
  h3: style.title,

  link: style.link,

  colors: style.colors,

  // prism: {
  //   style: atomDark,
  // },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}
