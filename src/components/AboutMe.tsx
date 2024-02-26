import { CheckIcon } from '@heroicons/react/24/outline';

const AboutMe = () => {
  return (
    <div className='mt-[-4rem] bg-black pb-3rem'>
        <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1
        lg:grid-cols-2 gap-[2rem]'>
            <div>
                <p className='heading__mini'>Acerca de Nosotros</p>
                <h1 className='heading__primary'>
                    El servicio de <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Internet</span> con mayor crecimiento.
                </h1>
                <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                ¡Somos una empresa orgullosamente juarense con la meta de ofrecerte el mejor servicio de Internet!
                <br /> <br />
                Gracias a ti, hemos alcanzado varios logros y objetivos. ¡Pero no nos detenemos aquí! ¡Seguimos adelante en busca de más!
                </p>
                <br/>
                <hr/>
                <br/>
                <div
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> Fibra Optica.</p>
                    </div>
                </div>
                <div
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> Alta Confiabilidad.</p>
                    </div>
                </div>
                <div
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> Gran Cobertura 24/7.</p>
                    </div>
                </div>
                <div 
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> Atencion Directa con el Cliente.</p>
                    </div>
                </div>
            </div>
            <div className='lg:ml-auto'>
                <div 
                data-aos="zoom-in" 
                data-aos-anchor-placement="top-center"
                className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                    <div className='p-6 text-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 '>
                        <p className='text-[50px] text-black font-bold'>12</p>
                        <p className='text-[20px] text-black font-600'>Años de Experiencia.</p>
                    </div>
                    <div 
                    data-aos="zoom-in" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="100"
                    className='p-6 text-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 '>
                        <p className='text-[50px] text-black font-bold'>+1200</p>
                        <p className='text-[20px] text-black font-600'>Clientes Satisfechos.</p>
                    </div>
                    <div 
                    data-aos="zoom-in" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="200"
                    className='p-6 text-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 '>
                        <p className='text-[50px] text-black font-bold'>+2</p>
                        <p className='text-[20px] text-black font-600'>Areas de Cobertura.</p>
                    </div>
                    <div 
                    data-aos="zoom-in" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="300"
                    className='p-6 text-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 '>
                        <p className='text-[50px] text-black font-bold'>Nuevos</p>
                        <p className='text-[20px] text-black font-600'>Proyectos.</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>            
  );        
};

export default AboutMe;