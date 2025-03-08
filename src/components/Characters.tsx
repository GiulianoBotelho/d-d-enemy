import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Cross } from "lucide-react";

interface Skill {
  max: number | string;
  current: number | string;
}

interface SpellSlot {
  max: number;
  current: number;
}

interface Character {
  id: number;
  name: string;
  class: string;
  hpMax: number;
  hpCurrent: number;
  image: string;
  skills?: Record<string, Skill>;
  spellSlots?: Record<string, SpellSlot>;
}

export default function Characters() {
  const location = useLocation();
  const { char }: { char: Character } = location.state || {};

  const savedHp = localStorage.getItem(`char_hp_${char.id}`);
  const savedSkills = localStorage.getItem(`char_skills_${char.id}`);
  const savedSpellSlots = localStorage.getItem(`char_spellSlots_${char.id}`);

  const initialHp = savedHp ? Number(savedHp) : char.hpCurrent;
  const initialSkills = savedSkills ? JSON.parse(savedSkills) : char.skills || {};
  const initialSpellSlots = savedSpellSlots ? JSON.parse(savedSpellSlots) : char.spellSlots || {};

  const [currentHp, setCurrentHp] = useState<number>(initialHp);
  const [damageInput, setDamageInput] = useState<string>("");
  const [healAmount, setHealAmount] = useState<number>(0);
  const [extraHp, setExtraHp] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [skills, setSkills] = useState<Record<string, Skill>>(initialSkills);
  const [spellSlots, setSpellSlots] = useState<Record<string, SpellSlot>>(initialSpellSlots);

  useEffect(() => {
    localStorage.setItem(`char_hp_${char.id}`, currentHp.toString());
  }, [currentHp]);

  useEffect(() => {
    localStorage.setItem(`char_skills_${char.id}`, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(`char_spellSlots_${char.id}`, JSON.stringify(spellSlots));
  }, [spellSlots]);

  const applyDamage = (damage: number) => {
    let remainingDamage = damage;
    if (remainingDamage > extraHp) {
      setCurrentHp((prevHp) => Math.max(prevHp - (remainingDamage - extraHp), 0));
      setExtraHp(0);
    } else {
      setExtraHp((prevExtra) => Math.max(prevExtra - remainingDamage, 0));
    }
    setDamageInput("");
  };

  const handleHeal = () => {
    setCurrentHp((prevHp) => Math.min(prevHp + healAmount, char.hpMax));
    setIsModalOpen(false);
  };

  const handleExtraHp = () => {
    setExtraHp((prevExtra) => prevExtra + healAmount);
    setIsModalOpen(false);
  };

  const useSkill = (skillName: string) => {
    setSkills((prev) => ({
      ...prev,
      [skillName]: {
        ...prev[skillName],
        current: typeof prev[skillName].current === "number" ? Math.max(prev[skillName].current - 1, 0) : prev[skillName].current
      }
    }));
  };

  const useSpellSlot = (spellLevel: string) => {
    setSpellSlots((prev) => ({
      ...prev,
      [spellLevel]: {
        ...prev[spellLevel],
        current: Math.max(prev[spellLevel].current - 1, 0)
      }
    }));
  };

  const handleLongRest = () => {
    const resetSkills = Object.keys(skills).reduce((acc, key) => ({
      ...acc,
      [key]: { ...skills[key], current: skills[key].max }
    }), {} as Record<string, Skill>);

    const resetSpellSlots = Object.keys(spellSlots).reduce((acc, level) => ({
      ...acc,
      [level]: { ...spellSlots[level], current: spellSlots[level].max }
    }), {} as Record<string, SpellSlot>);

    setSkills(resetSkills);
    setSpellSlots(resetSpellSlots);
    setCurrentHp(char.hpMax);
    setExtraHp(0);
  };

  const healthPercentage = (currentHp / char.hpMax) * 100;
  const isLowHealth = healthPercentage <= 30;

  return (
    <div className="flex flex-col gap-4 p-4 h-80 w-85 rounded-2xl bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-lg border-2 border-fuchsia-900/50">
        <div className="flex items-center gap-4">
          <img
            src={char.image}
            alt={char.name}
            className="w-16 h-16 rounded-xl border-2 border-fuchsia-700"
          />
          <div className="flex-1">
            <h1 className="text-xl font-bold text-fuchsia-300">{char.name}</h1>
            <div className="text-sm text-fuchsia-50">{char.class}</div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-2 bg-fuchsia-900/30 rounded-lg hover:bg-fuchsia-800/40"
          >
            <Cross className="text-emerald-400" size={20} />
          </button>
        </div>
      </div>

      {/* Barra de vida */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-lg border-2 border-fuchsia-900/50">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-fuchsia-100 text-sm">Pontos de Vida</span>
            <span className="text-fuchsia-50 font-medium">
              {currentHp}/{char.hpMax}
              {extraHp > 0 && <span className="text-emerald-400 ml-1">(+{extraHp})</span>}
            </span>
          </div>
          <motion.div
            className="h-3 bg-fuchsia-900/30 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-full"
              style={{ width: `${healthPercentage}%` }}
              animate={{
                width: `${healthPercentage}%`,
                backgroundColor: isLowHealth ? '#b91c1c' : '#15803d'
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Input de Dano */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-lg border-2 border-fuchsia-900/50">
        <div className="flex gap-2 border-none">
          <input
            type="number"
            placeholder="Dano recebido..."
            value={damageInput}
            onChange={(e) => setDamageInput(e.target.value)}
            className="flex-1 text-fuchsia-100 placeholder-amber-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            onClick={() => applyDamage(Number(damageInput))}
            className="px-6 py-2 bg-fuchsia-700 hover:bg-fuchsia-600 text-white rounded-lg font-medium transition-colors"
          >
            Aplicar
          </button>
        </div>
      </div>

      {/* Skills e Magias */}
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(skills).map(([skillName, skill]) => (
          <button
            key={skillName}
            onClick={() => useSkill(skillName)}
            disabled={skill.current === 0}
            className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all ${
              skill.current === 0 
                ? 'bg-gray-700/50 text-gray-500' 
                : 'bg-fuchsia-800/40 hover:bg-fuchsia-700/50 active:scale-95'
            }`}
          >
            <span className="text-sm text-fuchsia-300 font-medium capitalize">
              {skillName.replace(/([A-Z])/g, ' $1')}
            </span>
            <span className="text-xs mt-1 text-fuchsia-400/80">
              {skill.current !== "∞" ? `${skill.current}/${skill.max}` : 'Ilimitado'}
            </span>
          </button>
        ))}

        {Object.entries(spellSlots).map(([level, slot]) => (
          <button
            key={level}
            onClick={() => useSpellSlot(level)}
            disabled={slot.current === 0}
            className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all ${
              slot.current === 0 
                ? 'bg-gray-700/50 text-gray-500 opacity-50' 
                : 'bg-purple-800/40 hover:bg-purple-700/50 active:scale-95'
            }`}
          >
            <span className="text-sm text-purple-300 font-medium">
              Magia Nv. {level.split('lvl')[1]}
            </span>
            <span className="text-xs mt-1 text-purple-400/80">
              {slot.current}/{slot.max}
            </span>
          </button>
        ))}
      </div>

      {/* Descanso longo */}
      <div className="h-20 flex items-end">
        <button
          onClick={handleLongRest}
          className="w-full py-3 bg-fuchsia-700/40 hover:bg-fuchsia-600/50 text-fuchsia-300 rounded-xl font-medium transition-colors active:scale-95"
        >
          🛌 Descanso Longo
        </button>
      </div>

      {/* Modal de Cura */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md border-2 border-fuchsia-900/50 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-fuchsia-300">Gerenciar Vida</h3>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="p-1 hover:bg-gray-700/30 rounded-full"
        >
          <Cross className="text-fuchsia-400" size={24} />
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Seção de Cura */}
        <div className="space-y-3">
          <label className="text-fuchsia-100 text-sm font-medium">Cura permanente</label>
          <div className="flex flex-col gap-3">
            <input
              type="number"
              placeholder="Quantidade de cura..."
              onChange={(e) => setHealAmount(Number(e.target.value))}
              className="w-full bg-gray-700/50 text-fuchsia-100 placeholder-fuchsia-300/70 
                        rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500
                        border border-fuchsia-900/30"
            />
            <button
              onClick={handleHeal}
              className="w-full py-3 bg-emerald-700 text-white 
                        rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span> Aplicar Cura</span>
            </button>
          </div>
        </div>

        {/* Seção de Escudo */}
        <div className="space-y-3">
          <label className="text-fuchsia-100 text-sm font-medium">HP Temporário</label>
          <div className="flex flex-col gap-3">
            <input
              type="number"
              placeholder="Quantidade de escudo..."
              onChange={(e) => setHealAmount(Number(e.target.value))}
              className="w-full bg-gray-700/50 text-fuchsia-100 placeholder-fuchsia-300/70 
                        rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500
                        border border-fuchsia-900/30"
            />
            <button
              onClick={handleExtraHp}
              className="w-full py-3 bg-blue-600  text-white 
                        rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>🛡️ Adicionar Escudo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}