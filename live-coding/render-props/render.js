function Parent() {
  return <Wrapper render={({ who }) => <Child who={who + 'z'} />} who="world" />
}

function Child({ who }) {
  return `Hello ${who}!`
}

function Wrapper({ render, who }) {
  const shoutedWho = who.toUpperCase()
  return <h1>{render({ who: shoutedWho })}</h1>
}

render(Parent)
