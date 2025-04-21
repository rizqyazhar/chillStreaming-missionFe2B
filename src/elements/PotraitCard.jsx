import clsx from "clsx";

const PotraitCard = ({ src, handleOpenPopup }) => {
  return (
    <div
      className={clsx(
        "cursor-pointer",
        `w-[95px] h-[145px]`,
        `md:w-[200px] md:h-fit`,
        `xl:w-[234px] md:h-fit`
      )}
      onClick={handleOpenPopup}>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default PotraitCard;
