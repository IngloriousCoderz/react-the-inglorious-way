class CounterContainer extends PureComponent {
  increment = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }))
  setCount = count => this.setState({ count })

  handleChange = event => this.setCount(parseInt(event.target.value))

  state = {
    count: this.props.initialCount,
    increment: this.increment,
    decrement: this.decrement,
    handleChange: this.handleChange,
  }

  render() {
    return this.props.children(this.state)
  }
}

function Counter({ initialCount }) {
  return (
    <CounterContainer initialCount={initialCount}>
      {({ count, increment, decrement, handleChange }) => (
        <>
          <h1>{count}</h1>
          <div className="input-group">
            <button onClick={decrement}>-1</button>
            <input type="number" value={count} onChange={handleChange} />
            <button onClick={increment}>+1</button>
          </div>
        </>
      )}
    </CounterContainer>
  )
}

render(<Counter initialCount={42} />)
