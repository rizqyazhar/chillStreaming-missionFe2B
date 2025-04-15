import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className='absolute md:-right-4 md:bottom-42 w-11 h-11 hidden md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer'
      onClick={onClick}>
      <FaArrowRight className='text-lg text-white' />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className='absolute md:-left-6 md:bottom-42 w-11 h-11 hidden z-10 md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer'
      onClick={onClick}>
      <FaArrowLeft className='text-lg text-white ' />
    </div>
  );
};
