import { Link } from "react-router-dom"
import { Monsters } from "../data/Monsters"
import { useState } from "react"
export default function ChooseYourEnemies(){
    const [enemies, setEnemies] = useState(Monsters)
    const [selectedEnemies, setSelectedEnemies] =  useState<{[key:number]: number}>({})

    const upEnemies  = ((id:number) =>{
        setSelectedEnemies((prev) =>({
            ...prev,
            [id]:(prev[id] || 0) + 1,
        }))
    })

    const downEnemies = (id:number) =>{
        setSelectedEnemies((prev) =>({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0,
        }))
    }
    console.log(selectedEnemies)
    console.log(enemies)
    return(
        <>
          <div className="h-screen bg-black text-white p-6 flex flex-col items-center text-center gap-3 ">
            <h1 className="text-2xl font-bold mb-6">Escolha seus inimigos para o combate</h1>
           
                                
            {enemies.map((item)=>
               <div key={item.id} className="flex items-center  bg-gray-900 rounded-xl p-5 shadow-lg max-w-lg w-full border border-fuchsia-950">
               <img src={item.image} className="w-20 h-20 rounded-lg" alt="Goblin" />
               
               <div className="ml-6 w-56">
                   <h2 className="text-xl font-semibold text-fuchsia-300">{item.name}</h2>
                   <p className="text-md text-gray-300">CA: <span className="font-bold text-white">{item.ac}</span>, HP: <span  className="font-bold text-white">{item.hp}</span></p>
               </div>
               
               <div className="flex items-center bg-gray-800 rounded-lg p-2 w-16 justify-between ">
                   <button onClick={() => downEnemies(item.id)} className="px-2 py-1 w-4 bg-fuchsia-600 text-white rounded-l-lg hover:bg-fuchsia-700">-</button>
                   <h2>
                   {selectedEnemies[item.id] || 0}
                   
                   </h2>
                   <button onClick={() => upEnemies(item.id)} className="px-2 py-1 w-4 bg-fuchsia-600 text-white rounded-r-lg hover:bg-fuchsia-700">+</button>
               </div>
           </div>
                
            )}
            <button className=" w-48 bg-fuchsia-800 rounded-2xl text-lg hover:bg-fuchsia-600"> <Link to='/battle'>Começar</Link></button>
        </div>
        </>
    )
}