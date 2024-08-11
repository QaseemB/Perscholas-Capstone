import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Cart } from './Components/Cart'
import {Register} from './Components/Register'
import {Login} from './Components/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const nodeEnv = import.meta.env.VITE_NODE_ENV;
  return (
    <>
    <Cart/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
                    <Register />
                    <Login />
                </div>
    </>
  )
}

export default App
