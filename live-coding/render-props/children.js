function Parent() {
  return (
    <Wrapper>
      <Child />
    </Wrapper>
  )
}

function Child() {
  return 'Hello world!'
}

function Wrapper({ children }) {
  return <h1>{children}</h1>
}

render(Parent)
