import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Cart } from './Components/Cart'
import { PageOneRendering } from './Pages/Page1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './Pages/HomePage';
import './App.css'

function App() {

  return (
    <>
    <div className="App">
    {/* <Cart/> */}
    <Router>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/" element={<PageOneRendering/>}/>
     </Routes>
    </Router>
    </div>
    
   
     
       
    </>
  )
}

export default App
