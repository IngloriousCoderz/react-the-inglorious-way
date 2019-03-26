function Parent() {
  return <Wrapper who="world">{({ who }) => <Child who={who + 'z'} />}</Wrapper>
}

function Child({ who }) {
  return `Hello ${who}!`
}

function Wrapper({ children, who }) {
  const shoutedWho = who.toUpperCase()
  return <h1>{children({ who: shoutedWho })}</h1>
}

render(Parent)
