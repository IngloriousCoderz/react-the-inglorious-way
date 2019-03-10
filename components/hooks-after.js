function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const handleChange = event => setCount(parseInt(event.target.value))

  return { count, increment, decrement, handleChange }
}

function MyComponent() {
  const { count, increment, decrement, handleChange } = useCounter()

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
