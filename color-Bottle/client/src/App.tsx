import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dif from './components/difficulte/Dif'
import Easy from "./pages/easy/Easy"
import Normal from "./pages/normal/Normal"
import Hard from "./pages/hard/Hard"


function App() {
  

  return (
  
      <div>
        <Routes>
       <Route path="/" element={ <Dif/>}/>
       <Route path="/easy" element={ <Easy/>}/>
       <Route path="/normal" element={ <Normal/>}/>
       <Route path="/hard" element={ <Hard/>}/>
        </Routes>
      </div>
    
   
  )
}

export default App
