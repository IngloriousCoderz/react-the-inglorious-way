class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: props.initialCount }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1>{count}</h1>
        <div className="input-group">
          <button onClick={this.decrement.bind(this)}>-1</button>
          <input
            type="number"
            value={count}
            onChange={event => {
              this.setState({ count: parseInt(event.target.value) })
            }}
          />
          <button onClick={this.increment}>+1</button>
        </div>
      </div>
    )
  }
}

render(<Counter initialCount={42} />)
