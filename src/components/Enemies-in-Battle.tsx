import { useLocation } from 'react-router-dom';

export default function EnemiesInBattle() {
    const location = useLocation();

    // Recupera os inimigos filtrados da URL
    const searchParams = new URLSearchParams(location.search);
    const enemies = JSON.parse(searchParams.get("enemies") || "[]");

    console.log("Inimigos para a batalha", enemies);

    return (
        <>
                {enemies.length > 0 ? (
                    enemies.map((enemy:any, index:number) => (
                        <div className="bg-gray-900  border-fuchsia-950 w-screen  flex flex-col items-center justify-evenly gap-6">
                        <div key={index} className="flex  items-center  w-screen">
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
                                    />
                                    <button className="bg-fuchsia-800 rounded-4xl w-20">Aplicar</button>
                                </div>
                            </div>
                        </div>
            </div>
                    ))
                ) : (
                    <div className="text-white">Nenhum inimigo selecionado para a batalha.</div>
                )}
        </>
    );
}
