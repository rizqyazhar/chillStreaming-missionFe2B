const PotraitBox = ({ src }) => {
  return (
    <div className='w-[95px] h-[145px] md:w-60 md:h-full cursor-pointer'>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default PotraitBox;
