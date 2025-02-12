import Dice from '../assets/images/dados.png'
interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="w-screen flex items-center justify-center gap-2 ">
      <h1 className='font-semibold text-slate-400 text-lg'>Mesa Tática</h1>
      <img className='w-8' src={Dice}  alt="" />
      {children} 
    </header>
  );
};

export default Header;
