import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {Cross} from 'lucide-react'

export default function Characters() {
  const location = useLocation();
  const { char } = location.state || {};
  if (!char) {
    return <h1>Personagem não encontrado</h1>;
  }

  const [currentHp, setCurrentHp] = useState(char.hpCurrent);
  const [damageInput, setDamageInput] = useState("");
  const [healAmount, setHealAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const applyDamage = (damage: number) => {
    setCurrentHp((prevHp:number) => Math.max(prevHp - damage, 0));
    setDamageInput("");
  };

  const handleHeal = () => {
    setCurrentHp((prevHp:number) => Math.min(prevHp + healAmount, char.hpMax));
    setIsModalOpen(false); 

  };

  return (
    <>
      <div className="flex flex-col gap-4 text-center items-center">
        <div className="flex items-center rounded-xl p-6 shadow-lg w-80 h-auto border-2 border-fuchsia-950 flex-col transform transition-all">
        <div className="w-full"
              onClick={() => setIsModalOpen(true)}
            >
              <Cross style={{color:'green'}} />
            </div>
          <img
            src={char.image}
            className="w-28 h-28 rounded-full border-4 border-fuchsia-300 shadow-lg"
          />

          <div className="mt-4 w-full">
            <h2 className="text-lg font-bold text-fuchsia-300">{char.name}</h2>
            <motion.div
              className="bg-red-500 h-5 rounded-full font-semibold mt-2"
              style={{ width: `${(currentHp / char.hpMax) * 100}%` }}
              animate={{ width: `${(currentHp / char.hpMax) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-md text-fuchsia-100 mt-2">
              {currentHp} / {char.hpMax}
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full mt-4">
            {/* Input de Dano */}
            <input
              type="number"
              className="border-2 text-center rounded-lg w-full py-2 px-3 border-fuchsia-900 outline-none font-semibold text-sm"
              placeholder="Insira o dano..."
              value={damageInput}
              onChange={(e) => setDamageInput(e.target.value)}
            />
            <button
              className="bg-fuchsia-800 rounded-4xl w-full py-2 text-sm font-semibold hover:bg-fuchsia-700 transition"
              onClick={() => applyDamage(Number(damageInput))}
            >
              Aplicar Dano
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Cura */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className=" p-6 rounded-xl w-80 text-center  h-32 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-fuchsia-300 mb-4">Aplique o valor de cura</h3>
            <input
              type="number"
              className="border-2 text-center rounded-lg w-full py-2 px-3 border-fuchsia-900 outline-none font-semibold text-sm"
              placeholder="Quanto deseja curar?"
              onChange={(e) => setHealAmount(Number(e.target.value))}
            />
            <button
              className="bg-emerald-700 w-full py-2 text-white rounded-lg mt-4 hover:bg-emerald-600 transition"
              onClick={handleHeal}
            >
              Aplicar Cura
            </button>
            <button
              className="bg-red-500 w-full py-2 text-white rounded-lg mt-2 hover:bg-red-400 transition"
              onClick={() => setIsModalOpen(false)} // Fechar modal
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
