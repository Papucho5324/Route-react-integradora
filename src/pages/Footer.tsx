import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline';


const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] 
        pb-5 border-gray-600 border-opacity-40'>
            <div>
                <div className='font-logo text-white text-[18px]'>
                    <span className='text-[30px] md:text[40px] text-blue-700'>Xpectra</span>
                    FullSpeed
                </div>
                <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Ratione nihil debitis maxime deleniti recusandae. Perferendis, 
                libero aut dolorum neque atque magni necessitatibus adipisci fuga 
                error sunt consequatur saepe nemo quaerat?
                </h1> 
                <p className='mt-[1.3rem] text-yellow-300 underline font-semibold'>xpectraintegradora@gmail.com</p>
            </div>
            <div className='md:mx-auto'>
                <p className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                    Link Rapido
                </p>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                    About
                </p>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                    Paquetes
                </p>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                    Contact
                </p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                    Direccion
                </h1>
                <div className='flex items-center mt-[1rem] space-x-2'>
                    <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                    <p className='text-[17px] font-normal text-white opacity-75'>Ciudad Juarez, Chihuahua, Mexico.</p>
                </div>
                <div className='flex items-center mt-[1rem] space-x-2'>
                    <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                    <p className='text-[17px] font-normal text-white opacity-75'>xpectraintegradora@gmail.com</p>
                </div>
                <div className='flex items-center mt-[1rem] space-x-2'>
                    <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                    <p className='text-[17px] font-normal text-white opacity-75'>+52 765 119 6714</p>
                </div>
            </div>
        </div>
        <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
            &#169; CopyRight Xpectra 2024
        </div>
    </div>
  );
};

export default Footer