class MyComponent extends PureComponent {
  state = { count: 0 }

  increment = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }))
  setCount = count => this.setState({ count })

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
