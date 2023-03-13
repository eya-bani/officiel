
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Addchampions from './components/Addchampions'
import Allpages from './components/Allpages'
import Chamions from './components/Chamions'
import Home from './components/Home'
import Oneid from './components/Oneid'

function App() {


  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Allpages/>} ></Route>
      <Route path='champions' element={<Chamions/>} ></Route>
      <Route path='home' element={<Home/>} ></Route>
      <Route path='champions/:id' element={<Oneid/>} ></Route>
      <Route path='addchampions' element={<Addchampions/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
