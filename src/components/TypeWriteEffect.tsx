
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Velocidad Confiable.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mayor Calidad.',
        1000,
        'Mayor Satisfaccion.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;