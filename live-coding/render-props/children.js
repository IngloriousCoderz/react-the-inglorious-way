function Parent() {
  return (
    <Wrapper>
      <Child who="world" />
    </Wrapper>
  )
}

function Child({ who }) {
  return `Hello ${who}!`
}

function Wrapper({ children }) {
  return <h1>{children}</h1>
}

render(Parent)
