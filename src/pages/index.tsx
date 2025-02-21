import { Link } from "react-router-dom"
import HomeDice from '../assets/images/dice2.png'
import { Swords } from "lucide-react"
import { ShieldPlus } from "lucide-react"
export default function Home(){
    return(
        <>  
       <div className="flex items-center justify-center flex-col">
    <figure className="flex flex-col justify-center h-64 items-center">
        <img src={HomeDice} alt="Sword" className="w-60" />
        <figcaption className="text-2xl text-fuchsia-100 font-semibold mt-4">Mesa Tática</figcaption>
        <p className="text-slate-400 mt-2">Simplificando o gerenciamento de combates.</p>
    </figure>
    
    <div className="flex w-screen justify-evenly flex-col items-center gap-4 mt-8">
        <Link to='/warning'>
            <button className="flex h-12 w-48 gap-2 items-center justify-center bg-fuchsia-500 text-white rounded-md tracking-wide transition-all duration-200 ease-linear shadow-md hover:shadow-lg hover:bg-fuchsia-600">
                <Swords/>
                <span>Inimigos</span>
            </button>
        </Link>
        
        <Link to='/Choose-your-Allies'>
            <button className="flex h-12 w-48 items-center gap-2 justify-center border border-fuchsia-500 text-fuchsia-500 rounded-md tracking-wide transition-all duration-200 ease-linear shadow-md hover:shadow-lg hover:bg-fuchsia-100">
                    <ShieldPlus/>
                <span>Aliados</span>
            </button>
        </Link>
    </div>
</div>

        </>
    )
}