import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Landpage from './Pages/Landpage/Landpage'

function App() {


  return (
    <div className='AppContainer'>
      <div className="AppOverlay">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path={"/"} element={<Landpage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
