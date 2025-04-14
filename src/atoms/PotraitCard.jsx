const PotraitBox = ({ src, width = "234px", height = "356px" }) => {
  return (
    <div className={`md:w-${width} md:h-${height} cursor-pointer`}>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default PotraitBox;
