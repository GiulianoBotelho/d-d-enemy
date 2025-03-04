import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Dice from '../assets/images/d20.png';
import Header from "./Header";
import { ShieldCheck } from "lucide-react";

export default function EnemiesInBattle() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialEnemies = JSON.parse(searchParams.get("enemies") || "[]");

    const [currentEnemies, setCurrentEnemies] = useState(initialEnemies);
    const [damageInputs, setDamageInputs] = useState<{ [key: number]: string }>({});
    const [healInputs, setHealInputs] = useState<{ [key: number]: string }>({});
    
    const applyDamage = (index: number, damage: number) => {
        setCurrentEnemies((prevEnemies: any) => {
            if (!Array.isArray(prevEnemies) || prevEnemies.length === 0) {
                console.error("Lista de inimigos não está carregada corretamente.");
                return prevEnemies;
            }

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
        setCurrentEnemies((prevEnemies: any) => {
            return prevEnemies.map((enemy:any, i:number) => {
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

    return (
        <>
            {currentEnemies.length > 0 ? (<Header />) : ("")}

            {currentEnemies.length > 0 ? (
                currentEnemies.map((enemy: any, index: number) => (
                    <div key={index} className="bg-gray-900 border-fuchsia-950 w-full flex flex-col items-center justify-evenly gap-6 p-4">

                        <div className="flex items-center w-full justify-around bg-gray-800 p-3 rounded-xl shadow-md">
                            <img src={enemy.image} alt={enemy.name} className="w-20 h-20 rounded-lg border-2 border-fuchsia-700" />
                            <div className="text-center ml-4">
                                <h1 className="text-lg font-semibold text-fuchsia-300">{enemy.name}</h1>
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
                                    backgroundColor: enemy.hp > (enemy.maxHp / 2) ? "green" : "red",
                                    transition: "width 0.5s ease-out",
                                }}
                            ></div>
                        </div>
                        <div className="text-center text-sm text-gray-400 mt-1">{enemy.hp}/{enemy.maxHp}</div>

                        <div className="grid grid-cols-3 gap-3 w-full mt-4">
                            <p className="text-sm text-gray-300">STR: {enemy.stats.str}</p>
                            <p className="text-sm text-gray-300">DEX: {enemy.stats.dex}</p>
                            <p className="text-sm text-gray-300">CON: {enemy.stats.con}</p>
                            <p className="text-sm text-gray-300">INT: {enemy.stats.int}</p>
                            <p className="text-sm text-gray-300">WIS: {enemy.stats.wis}</p>
                            <p className="text-sm text-gray-300">CHA: {enemy.stats.cha}</p>
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
                <motion.div className="h-screen text-white font-bold text-center flex items-center justify-center flex-col gap-6">
                    <motion.div className="relative flex flex-col items-center justify-center px-6 py-4 rounded-lg shadow-2xl">
                        <motion.img src={Dice} alt="Dado" className="w-24 mb-4" />
                        <motion.p className="text-4xl font-extrabold text-amber-400 drop-shadow-lg">Vitória!</motion.p>
                        <Link to="/">
                            <motion.button className="border-2 border-fuchsia-800 bg-fuchsia-800 text-fuchsia-100 w-32 rounded-2xl text-lg font-bold py-2 mt-6 shadow-lg">
                                Início
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}