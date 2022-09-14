import I from './pieces/I'

function App() {
  const toggle = () => {}

  return (
    <>
      <h1>Tetris</h1>
      <svg width="1000" height="1000" style={{ border: '1px solid red' }}>
        <I />
      </svg>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}

export default App
