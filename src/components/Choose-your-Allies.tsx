import { Link } from "react-router-dom";
import Dalton from '../assets/images/Allies/Dalton.png';
import Ethan from '../assets/images/Allies/Ethan.png';
import Muscle from '../assets/images/Allies/Dr.Muscle.png';
import Elron from '../assets/images/Allies/Elron.png';
import Rui from '../assets/images/Allies/Rui.png';
import Wise from '../assets/images/Allies/All Wise.png';

interface Skill {
  max: number | string;
  current: number | string;
}

interface SpellSlot {
  max: number;
  current: number;
}

interface Character {
  id: number;
  name: string;
  class: string;
  hpMax: number;
  hpCurrent: number;
  image: string;
  skills?: Record<string, Skill>;
  spellSlots?: Record<string, SpellSlot>;
}

export default function ChooseYourAllies() {
  const Allies: Character[] = [
    {
      id: 1,
      name: "Dalton",
      class: "Guerreiro",
      hpMax: 31,
      hpCurrent: 31,
      image: Dalton,
      skills: {
        actionSurge: { max: 1, current: 1 },
        secondWind: { max: 1, current: 1 }
      }
    },
    {
      id: 2,
      name: "Ethan",
      class: "Ladino",
      hpMax: 25,
      hpCurrent: 25,
      image: Ethan,
      skills: {
        cunningAction: { max: "∞", current: "∞" }
      }
    },
    {
      id: 3,
      name: "Rui",
      class: "Bardo",
      hpMax: 23,
      hpCurrent: 23,
      image: Rui,
      skills: {
        inspiration: { max: 4, current: 4 }
      },
      spellSlots: {
        lvl1: { max: 4, current: 4 },
        lvl2: { max: 2, current: 2 }
      }
    },
    {
      id: 4,
      name: "Elron",
      class: "Mago",
      hpMax: 20,
      hpCurrent: 20,
      image: Elron,
      spellSlots: {
        lvl1: { max: 4, current: 4 },
        lvl2: { max: 2, current: 2 }
      }
    },
    {
      id: 5,
      name: "All Wise",
      class: "Mago",
      hpMax: 18,
      hpCurrent: 18,
      image: Wise,
      spellSlots: {
        lvl1: { max: 4, current: 4 },
        lvl2: { max: 2, current: 2 }
      }
    },
    {
      id: 6,
      name: "Dr. Muscle",
      class: "Clérigo",
      hpMax: 21,
      hpCurrent: 21,
      image: Muscle,
      spellSlots: {
        lvl1: { max: 4, current: 4 },
        lvl2: { max: 2, current: 2 }
      }
    }
  ];

  return (
    <div className="flex flex-col gap-4 p-4 h-auto w-60 rounded-2xl bg-gray-900">
      <div className="grid gap-3 w-full">
        {Allies.map((char) => (
          <Link 
            key={char.name} 
            to={`/Characters/${char.name}`} 
            state={{ char }}
            className="active:scale-95 transition-transform"
          >
            <div className="flex items-center bg-gray-800 rounded-xl p-3 shadow-lg border-2 border-fuchsia-900/50 hover:border-fuchsia-700">
              <img 
                src={char.image} 
                className="w-14 h-14 rounded-lg object-cover border-2 border-fuchsia-800"
                alt={char.name} 
              />
              
              <div className="ml-3 flex-1">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-lg font-semibold text-fuchsia-300">{char.name}</h2>
                  <span className="text-xs text-fuchsia-500/80 bg-fuchsia-900/20 px-2 py-1 rounded-full">
                    {char.class}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-1 w-full bg-fuchsia-900/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-fuchsia-500" 
                      style={{ width: `${(char.hpCurrent / char.hpMax) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-fuchsia-400">{char.hpCurrent}/{char.hpMax}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}