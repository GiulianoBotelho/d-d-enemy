import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Dice from '../assets/images/d20.png';
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
            <Header />

            {currentEnemies.length > 0 ? (
                currentEnemies.map((enemy: any, index: number) => (
                    <div key={index} className="bg-gray-900 border-fuchsia-950 w-full flex flex-col items-center justify-evenly gap-6 p-4">

                        <div className="flex items-center w-full justify-between bg-gray-800 p-3 rounded-xl shadow-md">
                            <img src={enemy.image} alt={enemy.name} className="w-20 h-20 rounded-lg border-2 border-fuchsia-700" />
                            <div className="text-center ml-4">
                                <h1 className="text-lg font-semibold text-fuchsia-300">{enemy.name}</h1>
                                <p className="text-sm text-gray-400">CA: {enemy.ac}</p>
                            </div>
                        </div>

                        <div className="w-full bg-gray-700 rounded-full mt-4">
                            <div
                                className="h-2 rounded-full"
                                style={{
                                    width: `${(enemy.hp / enemy.maxHp) * 100}%`,
                                    backgroundColor: enemy.hp > (enemy.maxHp / 2) ? "green" : "red", // Mudando a cor conforme a saúde
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

                        <div className="flex justify-between items-center w-full mt-4">
                            <input
                                type="number"
                                className="border-2 text-center rounded-lg w-40 px-2 py-1 border-fuchsia-900 outline-none bg-gray-800 text-white placeholder-gray-400"
                                placeholder="Insira o dano..."
                                value={damageInputs[index] || ""}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                            <button
                                className="bg-fuchsia-800 text-white rounded-4xl w-20 py-2 font-semibold hover:bg-fuchsia-700 transition-all"
                                onClick={() => applyDamage(index, Number(damageInputs[index] || 0))}
                            >
                                Aplicar
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <motion.div
                    className="h-screen text-white font-bold text-center flex items-center justify-center flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative flex flex-col items-center justify-center px-6 py-4 rounded-lg shadow-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        <motion.img
                            src={Dice}
                            alt="Dado"
                            className="w-24 mb-4"
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

                        <motion.p
                            className="text-4xl font-extrabold text-amber-400 drop-shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                        >
                            Vitória!
                        </motion.p>
                        <Link to="/">
                            <motion.button
                                className="border-2 border-fuchsia-800 bg-fuchsia-800 text-fuchsia-100 w-32 rounded-2xl text-lg font-bold py-2 mt-6 shadow-lg transform hover:bg-fuchsia-600 transition duration-200 ease-in-out"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            >
                                Início
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
