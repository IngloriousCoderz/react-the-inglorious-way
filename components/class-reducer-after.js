function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_COUNT':
      return action.payload
    default:
      return state
  }
}

class MyComponent extends PureComponent {
  state = { count: counter(undefined, {}) }

  dispatch = action =>
    this.setState(({ count }) => ({ count: counter(count, action) }))

  increment = () => this.dispatch({ type: 'INCREMENT' })
  decrement = () => this.dispatch({ type: 'DECREMENT' })
  setCount = value => this.dispatch({ type: 'SET_COUNT', payload: value })

  handleChange = event => this.setCount(parseInt(event.target.value))

  render() {
    const { count } = this.state

    return (
      <>
        <h1>{count}</h1>
        <div className="input-group">
          <button onClick={this.decrement}>-1</button>
          <input type="number" value={count} onChange={this.handleChange} />
          <button onClick={this.increment}>+1</button>
        </div>
      </>
    )
  }
}

render(MyComponent)
