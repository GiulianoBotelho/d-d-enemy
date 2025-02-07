export default function EnemiesInBattle() {
    return (
        <>
            <div className="bg-gray-900 border-2 border-fuchsia-950 w-screen h-auto flex items-center justify-evenly ">
                <div className="flex flex-col items-center "> 
                    <img src="src\assets\images\Inimigos DnD\Banshee.png" alt="Goblin" className="w-24" /> <p>CA: 15</p>
                    </div>
                <div>
                    <div className="text-center ">
                        <h1>Goblin</h1>
                    <div className="bg-gray-700 rounded-full h-4 w-full mt-2 ">
                        <div
                            className="bg-red-500 h-4 rounded-full"
                            style={{ width: "45%" }}
                        >
                        </div>
                        </div>
                    <div>13/34</div>
                    </div>
                    <div className="grid grid-cols-3" >
          <p>STR: 16</p>
          <p>DEX: 12</p>
          <p>CON: 14</p>
          <p>INT: 10</p>
          <p>WIS: 8</p>
          <p>CHA: 6</p> 
                        </div> 
                    <div className="flex justify-evenly  w-60">
                    <input type="number" className="border-2 text-center rounded-lg w-32 border-fuchsia-900 outline-none" placeholder="Insira o dano..." />
                    <button className="bg-fuchsia-800 rounded-4xl w-20">Aplicar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
