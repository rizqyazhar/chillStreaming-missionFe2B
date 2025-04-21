const LandscapeBox = ({ src, handleOpenPopup }) => {
  return (
    <div
      className='w-[370px] h-full md:w-[284px] md:h-full cursor-pointer'
      onClick={handleOpenPopup}>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default LandscapeBox;
