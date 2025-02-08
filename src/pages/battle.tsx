import EnemiesInBattle from "../components/Enemies-in-Battle"

export default function Battle(){
    return(
        <div className=" text-center h-screen flex  flex-col  gap-3">
           <h1>Começou a Batalha!</h1> 
            <EnemiesInBattle/>
        </div>
    )
}