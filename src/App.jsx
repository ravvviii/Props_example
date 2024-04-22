import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <div className="card-container">
      {/* Wrap the cards in a container with flex properties */}
      <Card
        imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=200&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Hinze Dam"
        description="Author"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=200&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        title="Nur-Sultan"
        description="Admin"
      />
    </div>
      
    </>
  )
}

export default App
