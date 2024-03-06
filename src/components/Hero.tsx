import TypeWriteEffect from "./TypeWriteEffect";

const Hero = () => {
  return ( 
    <div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
      <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
          <div>
            <h1 data-aos="fade-right" className='text-[#c4cfde] mb-[1.3rem]'>Alta velocidad, alta confiabilidad.</h1>
            <div>
              <h1 data-aos="fade-left" data-aos-delay="400" className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white'>Hola, Somos <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Xpectra</span>.</h1>
              <TypeWriteEffect />
            </div>
            <p 
            data-aos="fade-up" 
            data-aos-delay="800"
            className='mt-[1,2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
              Conectarte con el mundo nunca habia sido tan fácil. <br />
              Con internet de alta velocidad
              estamos aquí para ofrecerte una experiencia incomparable.
              Te invitamos a descubrir un mundo de posibilidades ilimitadas en comunicación con <span>Xpectra</span>.
            </p>
            <div className='mt-[2rem] flex items-center space-x-6'>
              <a href="/#/registrarse">
              <button 
              data-aos="zoom-in" 
              data-aos-delay="1200"
              className='relative flex h-[50px] w-40 items-center justify-center font-semibold
              overflow-hidden bg-blue-700 text-white shadow-2xl transition-all before:absolute before:h-0
              before:w-0 before:rounded-full before:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 before:duration-500 before:ease-out
              hover:before:h-56 hover:before:w-56'><span className='relative z-10'>Registrarse</span>
              </button>

              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero