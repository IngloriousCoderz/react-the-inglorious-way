function Parent() {
  return <Child />
}

function Child({ who }) {
  return `Hello ${who}!`
}

const enhance = who => Enhanced => {
  return function Wrapper(props) {
    return (
      <h1>
        <Enhanced {...props} who={who} />
      </h1>
    )
  }
}

Child = enhance('world')(Child)

render(Parent)
