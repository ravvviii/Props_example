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
        imageUrl="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
        title="Hinze Dam"
        description="Author"
        btnProfile = "Read More"
      />
      <Card
        imageUrl="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
        title="Nur-Sultan"
        description="Admin"
        btnProfile = "Applaude"
      />
      <Card
        imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
        title="
        Daniel Xavier"
        description="User"
        btnProfile = "View Profile"
      />
      <Card
        imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
        title="Simon Robben"
        description="User"
        btnProfile = "Read More"
      />
    </div>
      
    </>
  )
}

export default App
