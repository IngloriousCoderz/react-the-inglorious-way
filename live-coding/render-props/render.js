function Parent() {
  return <Wrapper who="world" render={who => <Child who={who + 'z'} />} />
}

function Child({ who }) {
  return `Hello ${who}!`
}

function Wrapper({ who, render }) {
  const shoutedWho = who.toUpperCase()
  return <h1>{render(shoutedWho)}</h1>
}

render(Parent)
