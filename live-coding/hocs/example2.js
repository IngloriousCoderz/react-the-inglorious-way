function Parent() {
  return <Child />
}

function Child({ who }) {
  return `Hello ${who}!`
}

const enhance = who => Enhanced => {
  return function Wrapper(props) {
    const shoutedWho = who.toUpperCase()
    return (
      <h1>
        <Enhanced {...props} who={shoutedWho} />
      </h1>
    )
  }
}

Child = enhance('world')(Child)

render(Parent)
