import PotraitCard from "../atoms/PotraitCard";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const PotraitCardBox = ({ title }) => {
  return (
    <div className='relative flex flex-col gap-5 md:gap-8 py-5 md:py-10'>
      <div className='w-full px-5 md:px-10 flex justify-start'>
        <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
          {title}
        </h3>
      </div>
      <div className='absolute left-3 bottom-48 w-11 h-11 hidden md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer'>
        <FaArrowLeft className='text-lg text-white ' />
      </div>
      <div className='absolute right-3 bottom-48 w-11 h-11 hidden md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer'>
        <FaArrowRight className='text-lg text-white' />
      </div>
      <div className='w-full px-5 md:px-10 grid grid-cols-[repeat(5,minmax(95px,234px))] gap-x-3 md:gap-x-7 overflow-x-auto md:overflow-visible'></div>
    </div>
  );
};

export default PotraitCardBox;
