import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import Battle from "./pages/battle";
import ChooseYourEnemies from "./components/Choose-your-Enemies";
import ChooseYourAllies from "./components/Choose-your-Allies";
import Characters from "./components/Characters";
import Warning from "./pages/warning";
import Dice from './assets/images/dice2.png'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <div className="flex items-center flex-col gap-8 h-screen justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/Choose-your-Allies" element={<ChooseYourAllies />} />
          <Route path="/warning" element={<Warning />} />
          <Route path="/Choose-your-Enemies" element={<ChooseYourEnemies />} />
          <Route path="/Characters/:nome" element={<Characters />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col bg-black text-white text-2xl animate-fadeOut text-center">

      <img src={Dice} alt="Dices" 
        className="w-50"
      />
      <h1 className="animate-pulse">Carregando...</h1>
    </div>
  );
}

export default App;
