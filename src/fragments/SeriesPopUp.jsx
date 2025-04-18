import { IoVolumeMuteSharp } from "react-icons/io5";

const SeriesPopUp = () => {
  return (
    <div className='absolute translate-x-1/2 -translate-y-60 w-1/2 overflow-hidden z-20 rounded-tl-2xl rounded-tr-2xl font-lato'>
      <div
        className='relative w-full h-[554px] md:px-16 bg-cover bg-center flex flex-col justify-end items-start md:pb-[106px]'
        style={{
          backgroundImage: "url(/public/img/landscape/popupimage.png)",
        }}>
        <div className='absolute md:top-5 md:right-5 flex items-center justify-center text-light-secondary text-lg rounded-full md:p-2 md:w-[30px] md:h-[30px] bg-pageHeaderBackground cursor-pointer z-50'>
          <img
            src='/public/img/icon/close-btn.svg'
            className='md:w-3.5 md:h-3.5'
          />
        </div>
        <div className='relative w-full z-50 flex flex-col md:gap-6'>
          <p className='font-bold md:text-[32px] text-white'>Ted Lasso</p>
          <div className='w-full flex justify-between z-30'>
            <div className='flex md:gap-2.5'>
              <button className='bg-primary-300 text-light-primary font-bold md:text-base h-6 md:h-11 md:px-10 md:py-2.5 rounded-full cursor-pointer'>
                Mulai
              </button>
              <button className='w-6 md:w-11 h-6 md:h-11 border border-light-secondary rounded-full text-light-secondary text-2xl font-bold cursor-pointer'>
                +
              </button>
            </div>
            <button className='w-6 md:w-11 h-6 md:h-11 rounded-full border border-light-secondary flex justify-center items-center cursor-pointer'>
              <IoVolumeMuteSharp className='w-3 h-3 md:w-[18px] md:h-[18px] text-light-secondary' />
            </button>
          </div>
        </div>
        <div className='absolute inset-0 bg-black/20 z-40'></div>
        <div className='absolute inset-x-0 bottom-0 w-full h-60 bg-linear-to-t from-pageHeaderBackground from-10% to-black/0 to-99%'></div>
      </div>
      <div className='bg-pageHeaderBackground text-light-primary md:px-16 md:py-6 grid grid-cols-2 md:gap-2.5'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-4 items-center text-light-secondary font-normal'>
            <p className='md:text-base'>2020</p>
            <p className='md:text-base'>10 episode</p>
            <p className='md:text-sm md:w-10 md:h-10 border border-light-secondary rounded-full flex items-center justify-center'>
              16+
            </p>
          </div>
          <p className='text-light-primary font-normal md:text-base'>
            Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke
            London untuk mengelola AFC Richmond, tim sepak bola Liga Utama
            Inggris yang kesulitan.
          </p>
        </div>
        <table className='md:p-2.5 font-normal md:text-base w-full'>
          <tbody>
            <tr>
              <th scope='row' className='flex items-start text-start w-28'>
                Cast
              </th>
              <td>
                <div className='flex gap-1'>
                  :
                  <span>
                    Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick
                    Mohammed, dan lain-lain
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row' className='flex items-start text-start w-28'>
                Genre
              </th>
              <td>
                <div className='flex gap-1'>
                  : <span>Komedi, Drama, Olahraga</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row' className='flex items-start text-start w-28'>
                Pembuat Film
              </th>
              <td>
                <div className='flex gap-1'>
                  :<span>Brendan Hunt, Joe Killy, Bill Lawrence</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='bg-pageHeaderBackground text-light-primary md:px-16 md:py-6 flex flex-col md:gap-7'>
        <h6 className='font-bold md:text-2xl'>Episode</h6>
        <div className='flex flex-col'>
          <div className='flex items-center md:gap-6 md:px-6 md:py-5 bg-grey-800 rounded-sm'>
            <p className='text-light-primary font-semibold md:text-lg'>1</p>
            <img src='/public/img/landscape/img-32.png' className='w-[170px]' />
            <div className='flex flex-col gap-2.5'>
              <div className='flex justify-between items-center'>
                <p className='text-light-primary font-semibold md:text-lg'>
                  Pilot
                </p>
                <p className='text-light-primary font-semibold md:text-sm'>
                  30 min
                </p>
              </div>
              <p className='font-normal text-lg overflow-hidden'>
                American football coach Ted Lasso is hired by a wealthy divorcee
                to coach the English soccer team AFC Richmond
              </p>
            </div>
          </div>
          <div className='flex items-center md:gap-6 md:px-6 md:py-5 rounded-sm'>
            <p className='text-light-primary font-semibold md:text-lg'>2</p>
            <img src='/public/img/landscape/img-33.png' className='w-[170px]' />
            <div className='flex flex-col gap-2.5'>
              <div className='flex justify-between items-center'>
                <p className='text-light-primary font-semibold md:text-lg'>
                  Biscuits
                </p>
                <p className='text-light-primary font-semibold md:text-sm'>
                  29 min
                </p>
              </div>
              <p className='font-normal text-lg overflow-hidden'>
                It’s Ted’s first day of coaching, and fans aren’t happy. He
                makes little headway but remains undeterred as the team...
              </p>
            </div>
          </div>
          <div className='flex items-center md:gap-6 md:px-6 md:py-5 rounded-sm'>
            <p className='text-light-primary font-semibold md:text-lg'>3</p>
            <img src='/public/img/landscape/img-34.png' className='w-[170px]' />
            <div className='flex flex-col gap-2.5'>
              <div className='flex justify-between items-center'>
                <p className='text-light-primary font-semibold md:text-lg'>
                  Trent Crimm: Independent
                </p>
                <p className='text-light-primary font-semibold md:text-sm'>
                  30 min
                </p>
              </div>
              <p className='font-normal text-lg overflow-hidden'>
                To arrange an in-depth exposé, Rebecca pairs cynical journalist
                Trent Crimm with Ted for a day. Ted and Roy...
              </p>
            </div>
          </div>
          <div className='flex items-center md:gap-6 md:px-6 md:py-5 rounded-sm'>
            <p className='text-light-primary font-semibold md:text-lg'>4</p>
            <img src='/public/img/landscape/img-35.png' className='w-[170px]' />
            <div className='flex flex-col gap-2.5'>
              <div className='flex justify-between items-center'>
                <p className='text-light-primary font-semibold md:text-lg'>
                  For The Children
                </p>
                <p className='text-light-primary font-semibold md:text-sm'>
                  33 min
                </p>
              </div>
              <p className='font-normal text-lg overflow-hidden'>
                Rebecca hosts the team’s annual charity benefit, where Ted
                stages a reconciliation between Roy and Jamie.
              </p>
            </div>
          </div>
          <div className='flex items-center md:gap-6 md:px-6 md:py-5 rounded-sm'>
            <p className='text-light-primary font-semibold md:text-lg'>5</p>
            <img src='/public/img/landscape/img-36.png' className='w-[170px]' />
            <div className='flex flex-col gap-2.5'>
              <div className='flex justify-between items-center'>
                <p className='text-light-primary font-semibold md:text-lg'>
                  Tan Lines
                </p>
                <p className='text-light-primary font-semibold md:text-sm'>
                  31 min
                </p>
              </div>
              <p className='font-normal text-lg overflow-hidden'>
                With his wife and son visiting from America, Ted makes drastic
                changes to the lineup during a critical match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesPopUp;
