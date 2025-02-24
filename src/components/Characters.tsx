import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Cross } from "lucide-react";
import SelectedropDown from './Dropdown';
export default function Characters() {
  const location = useLocation();
  const { char } = location.state || {};
  if (!char) {
    return <h1 className="text-white text-center mt-10">Personagem não encontrado</h1>;
  }

  const savedHp = localStorage.getItem(`char_hp_${char.id}`);
  const initialHp = savedHp ? Number(savedHp) : char.hpCurrent;
  const [currentHp, setCurrentHp] = useState(initialHp);
  const [damageInput, setDamageInput] = useState("");
  const [healAmount, setHealAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalContent,setModalContent] = useState('')
  const [LevelUpModal,setLevelUpModal] = useState(false)
  useEffect(() => {
    localStorage.setItem(`char_hp_${char.id}`, currentHp);
  }, [currentHp]);

  const applyDamage = (damage:number) => {
    setCurrentHp((prevHp:number) => Math.max(prevHp - damage, 0));
    setDamageInput("");
  };

  const handleHeal = () => {
    setCurrentHp((prevHp:number) => Math.min(prevHp + healAmount, char.hpMax));
    setIsModalOpen(false);
  };
  const openModal = (value: string) => {
    setModalContent(value);
    setLevelUpModal(true);
  };

  return (
    <div className="bg-gray-900 w-120  rounded-2xl flex flex-col items-center justify-evenly gap-6 p-4">
      <div className="flex items-center w-full justify-between bg-gray-800 p-4 rounded-xl shadow-md">
        <img
          src={char.image}
          alt={char.name}
          className="w-20 h-20 rounded-lg border-2 border-fuchsia-700"
        />
        <div className="text-center ml-4">
          <h1 className="text-lg font-semibold text-fuchsia-300">{char.name}</h1>
        </div>
        <button onClick={() => setIsModalOpen(true)}>
          <Cross className="text-green-500" />
        </button>
        <SelectedropDown
        options={[
          { value: "all", label: "Subir de Nível" },
          { value: "option-1", label: "LVL" },
          { value: "option-2", label: "HP Maximo" },
          { value: "option-3", label: "Status" },
          { value: "option-3", label: "CA" },
        ]}
        onSelect={openModal}
      />
      {ModalContent}
      {LevelUpModal}
      </div>

      <div className="w-full  rounded-full mt-4">
        <motion.div
          className="h-2 rounded-full"
          style={{ width: `${(currentHp / char.hpMax) * 100}%`, 
            backgroundColor: currentHp > (char.hpMax / 2) ? "green" : "red" }}
            animate={{ width: `${(currentHp / char.hpMax) * 100}%` }}
          transition={{ duration: 0.5 }}
          initial={{ width: 0 }}
        />
      </div>
      <div className="text-center text-sm text-gray-400 mt-1">
        {currentHp}/{char.hpMax}
      </div>

      <div className="flex justify-between items-center w-full mt-4">
        <input
          type="number"
          className="border-2 text-center rounded-lg w-40 px-2 py-1 border-fuchsia-900 outline-none bg-gray-800 text-white placeholder-gray-400"
          placeholder="Insira o dano..."
          value={damageInput}
          onChange={(e) => setDamageInput(e.target.value)}
        />
        <button
          className="bg-fuchsia-800 text-white rounded-4xl w-20 py-2 font-semibold hover:bg-fuchsia-700 transition-all"
          onClick={() => applyDamage(Number(damageInput))}
        >
          Aplicar
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-xl w-80 text-center">
            <h3 className="text-xl font-semibold text-fuchsia-300 mb-4">Aplique o valor de cura</h3>
            <input
              type="number"
              className="border-2 text-center rounded-lg w-full py-2 px-3 border-fuchsia-900 outline-none font-semibold text-sm bg-gray-700 text-white"
              placeholder="Quanto deseja curar?"
              onChange={(e) => setHealAmount(Number(e.target.value))}
            />
            <button
              className="bg-emerald-700 w-full py-2 text-white rounded-lg mt-4 hover:bg-emerald-600 transition"
              onClick={handleHeal}
            >
              Aplicar
            </button>
            <button
              className="bg-red-500 w-full py-2 text-white rounded-lg mt-2 hover:bg-red-400 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
