import { CheckIcon } from '@heroicons/react/24/solid'

interface Props {
    plane:string;
    price:string;
    bg:string;
    features:string[];
}


const PricingCard = ({bg,plane,price,features}:Props) => {
  return (
    <div className='text-center rounded-lg bg-gray-900'>
        <div className={`p-6 rounded-t-lg ${bg}`}>
            <h1 className='text-white text-[30px]'>{plane}</h1>
            <p className='text-[16px] bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent]'>
                Prueba nuestro plan {plane} 
                <span className='text-blue-400'>  </span>
            </p>
            <div className='flex justify-center items-end mt-[1rem] space-x-1'>
                <h1 className='text-[40px] font-bold text-yello-400'>{price}</h1>
                <p className='text-white'> /Mes</p>
            </div>
        </div>
        <div className='p-6'>
            <div className='flex items-center space-x-3'>
                <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
                <p className='text-[17px] text-white opacity-80'> {features[0]}</p>
            </div>
            <div className='flex items-center mt-[1rem] mb-[1rem] space-x-3'>
                <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
                <p className='text-[17px] text-white opacity-80'> Fibra Optica.</p>
            </div>
            <div className='flex items-center space-x-3'>
                <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
                <p className='text-[17px] text-white opacity-80'> Cobertura 24/7.</p>
            </div>
        </div>
        <a href="/#/registrarse">
            <button className='mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-gradient-to-r from-cyan-500 to-blue-500
            transition-all duration-300'>
            Me Interesa
        </button>

        </a>
        
    </div>
  );
};

export default PricingCard;