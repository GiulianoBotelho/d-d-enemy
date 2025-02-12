
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages"
import Battle from "./pages/battle"
import ChooseYourEnemies from "./components/Choose-your-Enemies"

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="flex items-center flex-col gap-8 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/battle" element={<Battle/>}/>
        <Route path='/Choose-your-Enemies' element={<ChooseYourEnemies/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
