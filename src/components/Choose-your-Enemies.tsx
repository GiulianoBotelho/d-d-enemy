import { useNavigate } from "react-router-dom";
import { Monsters } from "../data/Monsters";
import { useState } from "react";
import Header from "./Header";

export default function ChooseYourEnemies() {
  const [enemies] = useState(Monsters);
  const [selectedEnemies, setSelectedEnemies] = useState<any[]>([]);
  const navigate = useNavigate();

  const upEnemies = (id: number) => {
    const newEnemy = enemies.find((enemy) => enemy.id === id);
    if (newEnemy) {
      setSelectedEnemies((prev) => {
        const updatedEnemies = [...prev, { ...newEnemy }];
        console.log("Novo array de inimigos:", updatedEnemies);
        return updatedEnemies;
      });
    }
  };

  const downEnemies = (id: number) => {
    setSelectedEnemies((prev) => {
      const updatedEnemies = prev.filter((enemy, index) => {
        return !(enemy.id === id && prev.findIndex((e) => e.id === id) === index)
      })
      return updatedEnemies
    })
  }
  const handleStartBattle = () => {
    const selectedEnemiesParam = encodeURIComponent(JSON.stringify(selectedEnemies));
    navigate(`/battle?enemies=${selectedEnemiesParam}`);
  };

  return (
    <div className="h-screen bg-black text-white p-6 flex flex-col items-center text-center gap-3">
     <Header/>
      <h1 className="text-slate-100 text-lg font-bold mb-6">Escolha seus inimigos para o combate</h1>

      {enemies.map((item) => {
        const count = selectedEnemies.filter((e) => e.id === item.id).length;

        return (
          <div
            key={item.id}
            className="flex items-center bg-gray-900 rounded-xl p-5 shadow-lg max-w-lg w-full border border-fuchsia-950"
          >
            <img src={item.image} className="w-20 h-20 rounded-lg" alt={item.name} />
            <div className="ml-6 w-56">
              <h2 className="text-xl font-semibold text-fuchsia-300">{item.name}</h2>
              <p className="text-md text-gray-300">
                CA: <span className="font-bold text-white">{item.ac}</span>, HP:{" "}
                <span className="font-bold text-white">{item.hp}</span>
              </p>
            </div>
            <div className="flex items-center bg-gray-800 rounded-lg p-2 w-16 justify-between">
              <button
                onClick={() => downEnemies(item.id)}
                className="px-2 py-1 w-4 bg-fuchsia-600 text-white rounded-l-lg hover:bg-fuchsia-700"
              >
                -
              </button>
              <h2>{count}</h2>
              <button
                onClick={() => upEnemies(item.id)}
                className="px-2 py-1 w-4 bg-fuchsia-600 text-white rounded-r-lg hover:bg-fuchsia-700"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <button
        disabled={selectedEnemies.length === 0}
        className={`w-48 bg-fuchsia-800 rounded-2xl text-lg hover:bg-fuchsia-600 ${selectedEnemies.length === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        onClick={handleStartBattle}
      >
        Começar
      </button>
    </div>
  );
}
