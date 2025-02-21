import { Link } from "react-router-dom"
import Dalton from '../assets/images/Allies/Dalton.png'
import Ethan from '../assets/images/Allies/Ethan.png'
import Muscle from '../assets/images/Allies/Dr.Muscle.png'
import Elron from '../assets/images/Allies/Elron.png'
import Rui from '../assets/images/Allies/Rui.png'
import Wise from '../assets/images/Allies/All Wise.png'
export default function ChooseYourAllies() {
  const Allies = [
    { name: "Dalton", class: "Fighter", hpMax: 23, hpCurrent: 23, image: Dalton },
    { name: "Ethan", class: "Rogue", hpMax: 19, hpCurrent: 19, image: Ethan },
    { name: "Rui", class: "Bard", hpMax: 18, hpCurrent: 18, image: Rui },
    { name: "Elron", class: "Wizard", hpMax: 15, hpCurrent: 15, image: Elron },
    { name: "All Wise", class: "Wizard", hpMax: 15, hpCurrent: 15, image: Wise },
    { name: "Dr. Muscle", class: "Cleric", hpMax: 19, hpCurrent: 19, image: Muscle },
  ]
  return (

    <div className="flex flex-col gap-3 text-center items-center">
      <h1 className="font-semibold text-fuchsia-100 text-xl">Escolha seu personagem</h1>

      {Allies.map((char: any) => (
        <Link key={char.name} to={`/Characters/${char.name}`} state={{ char }}>
          <div className="flex items-center bg-gray-900 rounded-xl p-4 shadow-md w-screen  border border-fuchsia-800 hover:bg-gray-800 transition-colors duration-200">
            <img src={char.image} className="w-16 h-16 rounded-lg" alt={char.name} />

            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold text-fuchsia-300">{char.name}</h2>
              <p className="text-sm text-fuchsia-100">HP: {char.hpMax}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>


  )
}