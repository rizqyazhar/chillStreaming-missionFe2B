const LandscapeBox = ({ src }) => {
  return (
    <div className='w-[309px] h-[151px] md:w-[302px] md:h-[162px] cursor-pointer'>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default LandscapeBox;
