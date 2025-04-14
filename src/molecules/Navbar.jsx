import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = ({ genreTab }) => {
  return (
    <>
      <nav className='max-w-screen px-5 py-1.5 md:px-10 md:py-6 bg-pageHeaderBackground flex justify-between'>
        <div className='flex items-center gap-3 md:gap-20'>
          <a to='/home'>
            <picture>
              <source
                srcSet='/logo/chill-logo.svg'
                media='(min-width: 768px)'
              />
              <img src='/logo/mobile-chilllogo.svg' className='w-full' />
            </picture>
          </a>
          <div className='font-lato font-medium text-[10px] md:text-lg tracking-[.2px] text-white flex gap-3 md:gap-20'>
            <a to='/series'>Series</a>
            <a to='/films'>Film</a>
            <a to='/mylist'>Daftar Saya</a>
            {genreTab}
          </div>
        </div>
        <div className='relative flex gap-1 md:gap-2 items-center'>
          <img src='/img/icon/avatar.svg' className='w-5 md:w-10' />
          <MdKeyboardArrowDown />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
