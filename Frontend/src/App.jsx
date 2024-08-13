import { Cart } from './Components/Cart'
import { PageOneRendering } from './Pages/Page1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './Pages/HomePage';
import { Nav } from './Components/Nav'
import { StudioPage } from './Pages/StudioPage'
import { InstrumentPage } from './Pages/InstrumentPage'



function App() {

  return (
    <>
    <div className="App">
    <Router>

    <Nav/>
    <Routes>
      <Route path="/instruments" element={<InstrumentPage/>}/>
    <Route path="/studio" element={<StudioPage/>}/>
      <Route path="/studio" element={<StudioPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/" element={<PageOneRendering/>}/>
     </Routes>
    </Router>
    </div>
    
   
     
       
    </>
  )
}

export default App
