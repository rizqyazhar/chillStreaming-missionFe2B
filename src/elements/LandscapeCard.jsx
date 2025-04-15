const LandscapeBox = ({ src }) => {
  return (
    <div className='w-[370px] h-full md:w-[284px] md:h-full cursor-pointer'>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default LandscapeBox;
