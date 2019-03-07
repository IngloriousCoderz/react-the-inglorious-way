function useCounter() {
  const [count, dispatch] = useReducer(counter, 0)

  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })
  const handleChange = event =>
    dispatch({ type: 'SET_COUNT', payload: parseInt(event.target.value) })

  return { count, increment, decrement, handleChange }
}

function MyComponent() {
  const { count, decrement, increment, handleChange } = useCounter()

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

render(memo(MyComponent))

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
