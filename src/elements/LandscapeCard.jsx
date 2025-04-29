const LandscapeBox = ({ src, onClick }) => {
  return (
    <div
      className='w-[370px] h-full md:w-52 lg:w-[284px] cursor-pointer'
      onClick={onClick}>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default LandscapeBox;
