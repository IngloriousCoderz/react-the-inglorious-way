const enhance = compose(
  withState('count', 'setCount', ({ initialCount }) => initialCount),
  withHandlers({
    increment: ({ setCount }) => () => setCount(count => count + 1),
    decrement: ({ setCount }) => () => setCount(count => count - 1),
    handleChange: ({ setCount }) => event =>
      setCount(parseInt(event.target.value)),
  }),
  memo,
)

const Counter = enhance(({ count, increment, decrement, handleChange }) => (
  <>
    <h1>{count}</h1>
    <div className="input-group">
      <button onClick={decrement}>-1</button>
      <input type="number" value={count} onChange={handleChange} />
      <button onClick={increment}>+1</button>
    </div>
  </>
))

render(<Counter initialCount={42} />)
