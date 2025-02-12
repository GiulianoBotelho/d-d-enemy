import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Dice from '../assets/images/d20.png'
import Header from "./Header";
export default function EnemiesInBattle() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialEnemies = JSON.parse(searchParams.get("enemies") || "[]");

    const [currentEnemies, setCurrentEnemies] = useState(initialEnemies);
    const [damageInputs, setDamageInputs] = useState<{ [key: number]: string }>({});

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

    const handleInputChange = (index: number, value: string) => {
        setDamageInputs(prev => ({ ...prev, [index]: value }));
    };

    return (
        <>

        <Header/>
        
            {currentEnemies.length > 0 ? (
                currentEnemies.map((enemy: any, index: number) => (
                    <div key={index} className="bg-gray-900 border-fuchsia-950 w-screen flex flex-col items-center justify-evenly gap-6">
                        <div className="flex items-center w-screen">
                            <img src={enemy.image} alt={enemy.name} className="w-24" />
                            <p>CA: {enemy.ac}</p>
                            <div>
                                <div className="text-center">
                                    <h1>{enemy.name}</h1>
                                    <div className="bg-gray-700 rounded-full h-4 w-full mt-2">
                                        <div
                                            className="bg-red-500 h-4 rounded-full"
                                            style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
                                        ></div>
                                    </div>
                                    <div>{enemy.hp}/{enemy.maxHp}</div>
                                </div>

                                <div className="grid grid-cols-3">
                                    <p>STR: {enemy.stats.str}</p>
                                    <p>DEX: {enemy.stats.dex}</p>
                                    <p>CON: {enemy.stats.con}</p>
                                    <p>INT: {enemy.stats.int}</p>
                                    <p>WIS: {enemy.stats.wis}</p>
                                    <p>CHA: {enemy.stats.cha}</p>
                                </div>

                                <div className="flex justify-evenly w-60">
                                    <input
                                        type="number"
                                        className="border-2 text-center rounded-lg w-32 border-fuchsia-900 outline-none"
                                        placeholder="Insira o dano..."
                                        value={damageInputs[index] || ""}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                    <button className="bg-fuchsia-800 rounded-4xl w-20" onClick={() => applyDamage(index, Number(damageInputs[index] || 0))}>
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <motion.div
                    className="text-white font-bold text-center mt-10 px-4 py-2 rounded-lg shadow-lg flex items-center justify-center h-screen flex-col gap-3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                    <motion.img
                        src={Dice}
                        className="w-20"
                        alt=""
                        initial={{ opacity: 0, scale: 0.5, rotate: -360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                        }}
                    />
                    <p className="text-3xl font-semibold text-amber-400">Vitória!</p>
                    <Link to="/">
                        <button className="border-1 border-fuchsia-800 w-32 rounded-2xl text-fuchsia-800 text-lg font-bold">
                            Início
                        </button>
                    </Link>
                </motion.div>

            )}
        </>
    );
}
