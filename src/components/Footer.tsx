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
                <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>En Xpectra nos encanta tenerte con nosotros, deseamos fielmente ser tu mejor opcion de internet.
                </h1>
                
            </div>
            <div className='md:mx-auto'>
                <p className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                    Link R&aacute;pido
                </p>
                <a href="/">
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Home
                    </p>
                </a>
                
                <a href="/#/paquetes">
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Paquetes
                    </p>
                </a>
                
                <a href="/#/registrarse">
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Registrarse
                    </p>
                </a>
                
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                    Direcci&oacute;n
                </h1>
                <div className='flex items-center mt-[1rem] space-x-2'>
                    <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                    <p className='text-[17px] font-normal text-white opacity-75'>Ciudad Ju&aacute;rez, Chihuahua, M&eacute;xico.</p>
                </div>
                <div className='flex items-center mt-[1rem] space-x-2'>
                    <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                    <a href="mailto:ventas@xpectra.site">
                        <p className='text-[17px] font-normal text-white opacity-75'>ventas@xpectra.site</p>
                    </a>
                </div>
                <div className='flex items-center mt-[1rem] space-x-2'>
                    <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
                    <a href="tel:527651196714">
                        <p className='text-[17px] font-normal text-white opacity-75'>+52 765 119 6714</p>
                    </a>
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