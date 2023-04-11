import { useState } from 'react'
import Routes from './pages/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes></Routes>
    </div>
  )
}

export default App
