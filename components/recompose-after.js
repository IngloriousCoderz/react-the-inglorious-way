const enhance = compose(
  withReducer('count', 'dispatch', counter, 0),
  withHandlers({
    increment: ({ dispatch }) => () => dispatch({ type: 'INCREMENT' }),
    decrement: ({ dispatch }) => () => dispatch({ type: 'DECREMENT' }),
    setCount: ({ dispatch }) => value =>
      dispatch({ type: 'SET_COUNT', payload: value }),
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
