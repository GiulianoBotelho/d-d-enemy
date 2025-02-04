export default function ChoseEnemy(){
    return(
        <>
         <h1>D&D Enemy life calculator</h1>

        <div className="flex justify-evenly items-center gap-2">
         <input className="border-2 rounded-2xl text-center border-fuchsia-900" type="text" placeholder="Buscar monstro..." />
         <button className="bg-fuchsia-950 rounded-4xl w-20">Buscar</button>
         </div>

        </>
    )
}