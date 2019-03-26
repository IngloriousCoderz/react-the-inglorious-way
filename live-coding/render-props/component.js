function Parent() {
  return <Wrapper Component={Child} who="world" />
}

function Child({ who }) {
  return `Hello ${who}!`
}

function Wrapper({ Component, who }) {
  const shoutedWho = who.toUpperCase()
  return (
    <h1>
      <Component who={shoutedWho} />
    </h1>
  )
}

render(Parent)
