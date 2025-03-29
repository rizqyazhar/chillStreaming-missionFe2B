import Button from "./Button";

const ButtonFormGoogle = ({ text }) => {
  return (
    <Button>
      <img src='/logo/google-icon.svg' className='w-2.5 md:w-[18px]' />
      <span className='tracking-[.2px] text-white font-lato font-[600]'>
        {text}
      </span>
    </Button>
  );
};

export default ButtonFormGoogle;
