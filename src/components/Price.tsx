
import PricingCard from './PricingCard';

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
        <div className='text-center'>
            <p className='heading__mini'>Nuestros Paquetes de Internet</p>
            <h1 className='heading__primary'>
              Mejores <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Precios</span> para tu hogar.
            </h1>
        </div>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem]
        md:pt-[7rem]'>
          <PricingCard plane="Basico" price="$350" features={['30 Megas de Subida y Bajada']} bg="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"/>
          <PricingCard plane="Popular" price="$450" features={['50 Megas de Subida y Bajada']} bg="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"/>
          <PricingCard plane="Premium" price="$600" features={['100 Megas de Subida y Bajada']} bg="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"/>
        </div>
    </div>
  );
};

export default Price