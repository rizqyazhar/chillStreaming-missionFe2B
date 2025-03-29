const Button = ({ child, background }) => {
  return (
    <button
      className={`w-full px-3 md:px-5 py-2 md:py-3.5 flex justify-center items-center bg-${background} text-white border border-outlineBorder tracking-[.2px] font-lato font-[600] text-[10px] md:text-[16px] rounded-3xl cursor-pointer`}>
      {child}
    </button>
  );
};

export default Button;
