import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Warning(){
    return(
        <>
        <div className="border-2 border-fuchsia-300 bg-fuchsia-950/30 rounded-2xl px-4 py-6 w-full max-w-md text-center h-60 flex flex-col gap-2">
        <div>
            <h1 className="text-xl text-fuchsia-200 font-semibold">Atenção!</h1>
            <p className="text-fuchsia-200 font-medium mt-2">
                Esta área é exclusiva para mestres. Ela contém spoilers dos inimigos da campanha. Você tem certeza que deseja prosseguir?
            </p>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
                <Link to='/Choose-your-Enemies'>
                    <button className="h-12 w-80  bg-fuchsia-500 text-white rounded-md tracking-wide transition-all duration-200 ease-linear shadow-md hover:shadow-lg hover:bg-fuchsia-600">
                        Prosseguir
                    </button>
                </Link>

                <Link to='/'>
                <button className="h-12 w-80 max-w-[350px] border border-fuchsia-500 text-fuchsia-500 rounded-md tracking-wide transition-all duration-200 ease-linear shadow-md hover:shadow-lg hover:bg-fuchsia-100 flex items-center justify-center gap-2">
  <ArrowLeft /> 
  <span>Retornar</span> 
</button>

                </Link>
            </div>
        </div>
        </>
    )
}
