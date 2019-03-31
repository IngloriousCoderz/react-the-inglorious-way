function Hello({ who }) {
  return <h1>{`Hello ${who}!`}</h1>
}

const enhance = Enhanced => ({ who, ...props }) => {
  if (!who.length) return 'Name too short'

  const shoutedWho = who.toUpperCase()
  return <Enhanced {...props} who={shoutedWho} />
}

Hello = enhance(Hello)

render(<Hello who="world" />)
