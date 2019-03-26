class CounterContainer extends PureComponent {
  state = { count: this.props.initialCount }

  increment = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }))
  setCount = count => this.setState({ count })

  handleChange = event => this.setCount(parseInt(event.target.value))

  render() {
    return (
      <Counter
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
        handleChange={this.handleChange}
      />
    )
  }
}

function Counter({ count, increment, decrement, handleChange }) {
  return (
    <>
      <h1>{count}</h1>
      <div className="input-group">
        <button onClick={decrement}>-1</button>
        <input type="number" value={count} onChange={handleChange} />
        <button onClick={increment}>+1</button>
      </div>
    </>
  )
}

render(<CounterContainer initialCount={42} />)
