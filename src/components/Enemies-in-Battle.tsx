import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import Header from "./Header";

interface Enemy {
  name: string;
  image: string;
  ac: number;
  hp: number;
  maxHp: number;
  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
}

export default function EnemiesInBattle() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialEnemies: Enemy[] = JSON.parse(searchParams.get("enemies") || "[]");

  const [currentEnemies, setCurrentEnemies] = useState<Enemy[]>(initialEnemies);
  const [damageInputs, setDamageInputs] = useState<{ [key: number]: string }>({});
  const [healInputs, setHealInputs] = useState<{ [key: number]: string }>({});

  const colorOptions = [
    "text-fuchsia-300",
    "text-blue-500",
    "text-yellow-500",
    "text-green-500",
    "text-red-500",
    "text-purple-500",
  ];

  const getOccurrenceIndex = (enemy: Enemy, index: number): number => {
    const occurrences = currentEnemies.filter(
      (e, i) => e.name === enemy.name && i <= index
    );
    return occurrences.length - 1;
  };

  const getEnemyColor = (enemy: Enemy, index: number) => {
    const occurrenceIndex = getOccurrenceIndex(enemy, index);
    return colorOptions[occurrenceIndex % colorOptions.length];
  };

  const applyDamage = (index: number, damage: number) => {
    setCurrentEnemies((prevEnemies: Enemy[]) => {
      const updatedEnemies = prevEnemies.map((enemy, i) => {
        if (i === index) {
          return { ...enemy, hp: Math.max(enemy.hp - damage, 0) };
        }
        return enemy;
      });
      return updatedEnemies.filter(enemy => enemy.hp > 0);
    });
    setDamageInputs(prev => ({ ...prev, [index]: "" }));
  };

  const applyHeal = (index: number, heal: number) => {
    setCurrentEnemies((prevEnemies: Enemy[]) => {
      return prevEnemies.map((enemy, i) => {
        if (i === index) {
          return { ...enemy, hp: Math.min(enemy.hp + heal, enemy.maxHp) };
        }
        return enemy;
      });
    });
    setHealInputs(prev => ({ ...prev, [index]: "" }));
  };

  const handleInputChange = (index: number, value: string, type: "damage" | "heal") => {
    if (type === "damage") {
      setDamageInputs(prev => ({ ...prev, [index]: value }));
    } else {
      setHealInputs(prev => ({ ...prev, [index]: value }));
    }
  };

  const calculateBonus = (stat: number) => {
    const bonus = Math.floor((stat - 10) / 2);
    return bonus >= 0 ? `+${bonus}` : `${bonus}`;
  };

  return (
    <>
      {currentEnemies.length > 0 && <Header />}
      {currentEnemies.length > 0 ? (
        currentEnemies.map((enemy, index) => (
          <div key={index} className="bg-gray-900 w-full flex flex-col items-center justify-evenly gap-6 p-4">
            <div className="flex items-center w-full justify-around bg-gray-800 p-3 rounded-xl shadow-md">
              <img
                src={enemy.image}
                alt={enemy.name}
                className="w-20 h-20 rounded-lg border-2 border-fuchsia-700"
              />
              <div className="text-center ml-4">
                <h1 className={`text-lg font-semibold ${getEnemyColor(enemy, index)}`}>
                  {enemy.name}
                </h1>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <ShieldCheck className="text-fuchsia-400" size={18} />
                  <span className="text-lg font-semibold">{enemy.ac}</span>
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-700 rounded-full mt-4">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(enemy.hp / enemy.maxHp) * 100}%`,
                  backgroundColor: enemy.hp > enemy.maxHp / 2 ? "green" : "red",
                  transition: "width 0.5s ease-out",
                }}
              ></div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-1">
              {enemy.hp}/{enemy.maxHp}
            </div>

            <div className="grid grid-cols-3 gap-3 w-full mt-4">
              <p className="text-sm text-gray-300">STR: {enemy.stats.str} ({calculateBonus(enemy.stats.str)})</p>
              <p className="text-sm text-gray-300">DEX: {enemy.stats.dex} ({calculateBonus(enemy.stats.dex)})</p>
              <p className="text-sm text-gray-300">CON: {enemy.stats.con} ({calculateBonus(enemy.stats.con)})</p>
              <p className="text-sm text-gray-300">INT: {enemy.stats.int} ({calculateBonus(enemy.stats.int)})</p>
              <p className="text-sm text-gray-300">WIS: {enemy.stats.wis} ({calculateBonus(enemy.stats.wis)})</p>
              <p className="text-sm text-gray-300">CHA: {enemy.stats.cha} ({calculateBonus(enemy.stats.cha)})</p>
            </div>

            <div className="flex flex-col gap-2 w-full mt-4">
              <div className="flex justify-between items-center w-full">
                <input
                  type="number"
                  className="border-2 text-center rounded-lg w-32 px-2 py-1 border-fuchsia-900 outline-none bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Dano..."
                  value={damageInputs[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value, "damage")}
                />
                <button
                  className="bg-red-700 text-white rounded-4xl w-20 py-2 font-semibold hover:bg-red-600 transition-all"
                  onClick={() => applyDamage(index, Number(damageInputs[index] || 0))}
                >
                  Dano
                </button>
              </div>
              <div className="flex justify-between items-center w-full">
                <input
                  type="number"
                  className="border-2 text-center rounded-lg w-32 px-2 py-1 border-green-900 outline-none bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Cura..."
                  value={healInputs[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value, "heal")}
                />
                <button
                  className="bg-green-700 text-white rounded-4xl w-20 py-2 font-semibold hover:bg-green-600 transition-all"
                  onClick={() => applyHeal(index, Number(healInputs[index] || 0))}
                >
                  Curar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-screen text-white font-bold text-center flex items-center justify-center flex-col gap-6">
          <div className="relative flex flex-col items-center justify-center px-6 py-4 rounded-lg shadow-2xl">
            <p className="text-4xl font-extrabold text-amber-400 drop-shadow-lg">Vitória!</p>
          </div>
        </div>
      )}
    </>
  );
}
