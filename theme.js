import { default as theme } from 'mdx-deck/themes'
// import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

const titleStyle = {
  fontFamily: 'Orbitron',
  fontWeight: 'normal',
  color: '#c678dd',
}

export default {
  ...theme,

  h1: titleStyle,
  h2: titleStyle,
  h3: titleStyle,

  link: {
    color: '#61afef',
    textDecoration: 'none',
  },

  colors: {
    ...theme.colors,
    text: '#303030',
    background: '#f5f5f5',
    heading: '#c678dd',
    pre: '#c678dd',
  },

  // prism: {
  //   style: atomDark,
  // },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}
