import clsx from "clsx";

const PotraitBox = ({ src }) => {
  return (
    <div
      className={clsx(
        "cursor-pointer",
        `w-[95px] h-[145px]`,
        `md:w-[200px] md:h-fit`,
        `xl:w-[234px] md:h-fit`
      )}>
      <img
        src={src}
        className='w-full h-full object-cover object-center rounded-lg'
      />
    </div>
  );
};

export default PotraitBox;
