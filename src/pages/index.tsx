import { Link } from "react-router-dom"
export default function Home(){
    return(
        <>  
        <div className="flex items-center justify-center flex-col">
        <figure className="flex flex-col justify-center h-64 items-center">
            
            <img src="src\assets\images\dice2.png" 
            alt="Sword" 
            className="w-60"
            />
            <figcaption className="text-2xl">Mesa Tática</figcaption>
            <p className="text-slate-400">Simplificando o gerenciamento de combates.</p>
        </figure>
        <div className="flex w-screen  justify-evenly">

            <button className="bg-fuchsia-800 rounded-4xl w-48 h-8 text-fuchsia-100"><Link to='/Choose-your-Enemies'>Começar</Link></button>
        </div>
        </div>
        </>
    )
}