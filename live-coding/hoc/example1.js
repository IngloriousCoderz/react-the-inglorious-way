function Parent() {
  return <Child />
}

function Child() {
  return 'Hello world!'
}

const enhance = Enhanced => {
  return function Wrapper(props) {
    return (
      <h1>
        <Enhanced {...props} />
      </h1>
    )
  }
}

Child = enhance(Child)

render(Parent)
