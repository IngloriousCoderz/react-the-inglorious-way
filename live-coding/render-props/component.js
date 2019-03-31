function Parent() {
  return <Wrapper who="world" Component={Child} />
}

function Child({ who }) {
  return `Hello ${who}!`
}

function Wrapper({ who, Component }) {
  const shoutedWho = who.toUpperCase()
  return (
    <h1>
      <Component who={shoutedWho} />
    </h1>
  )
}

render(Parent)
