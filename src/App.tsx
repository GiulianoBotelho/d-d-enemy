import CardEnemy from "./components/Card-Enemy"
import ChoseEnemy from "./components/Chose-Enemy"

function App() {


  return (
    <>
    <div className="flex items-center flex-col gap-8">
      <ChoseEnemy/>
    <CardEnemy/>
    </div>
    </>
  )
}

export default App
