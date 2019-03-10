const enhance = compose(
  withState('count', 'setCount', 0),
  withHandlers({
    increment: ({ setCount }) => () => setCount(count => count + 1),
    decrement: ({ setCount }) => () => setCount(count => count - 1),
  }),
  withHandlers({
    handleChange: ({ setCount }) => event =>
      setCount(parseInt(event.target.value)),
  }),
  pure,
)

function MyComponent({ count, decrement, increment, handleChange }) {
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

render(enhance(MyComponent))
