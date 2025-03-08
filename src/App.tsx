import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages";
import Battle from "./pages/battle";
import ChooseYourEnemies from "./components/Choose-your-Enemies";
import ChooseYourAllies from "./components/Choose-your-Allies";
import Characters from "./components/Characters";
import Warning from "./pages/warning";
function App() {

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


export default App;
