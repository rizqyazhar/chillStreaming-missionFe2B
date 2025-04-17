import React from "react";

const PackagesMembership = () => {
  return (
    <section className='w-11/12 md:w-full flex flex-col gap-10 items-center mx-auto mt-5 md:mt-20 p-10 bg-paperBackground font-lato text-light-primary'>
      <div className='flex flex-col items-center gap-1.5 md:gap-3'>
        <h3 className='text-xl md:text-[32px] font-bold'>Pilih Paketmu</h3>
        <p className='text-sm md:text-lg font-medium'>
          Temukan paket sesuai kebutuhanmu!
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-[72px]'>
        <div className='flex flex-col gap-6 p-6 rounded-xl bg-linear-to-r from-[#537cd4]/100 from-1% to-primary-100 to-99%'>
          <h5 className='w-fit rounded-full bg-extraBackground px-5 py-2.5 font-semibold text-base'>
            Individual
          </h5>
          <div className='flex flex-col gap-1 text-xs font-normal'>
            <p>Mulai dari Rp49,990/bulan</p>
            <p>1 Akun</p>
          </div>
          <div className='flex flex-col gap-2 font-normal text-sm'>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Tidak ada iklan
            </p>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Kualitas 720p
            </p>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Download konten pilihan
            </p>
          </div>
          <div className='border border-outlineBorder'></div>
          <div className='flex flex-col items-center gap-1'>
            <button className='w-full flex items-center rounded-full justify-center px-[26px] py-2.5 bg-light-primary text-primary-300 font-bold text-sm cursor-pointer'>
              Langganan
            </button>
            <p className='text-light-primary font-normal text-xs'>
              Syarat dan Ketentuan Berlaku
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-6 p-6 rounded-xl bg-linear-to-r from-[#537cd4]/100 from-1% to-primary-100 to-99%'>
          <h5 className='w-fit rounded-full bg-extraBackground px-5 py-2.5 font-semibold text-base'>
            Berdua
          </h5>
          <div className='flex flex-col gap-1 text-xs font-normal'>
            <p>Mulai dari Rp79,990/bulan</p>
            <p>2 Akun</p>
          </div>
          <div className='flex flex-col gap-2 font-normal text-sm'>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Tidak ada iklan
            </p>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Kualitas 1080p
            </p>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Download konten pilihan
            </p>
          </div>
          <div className='border border-outlineBorder'></div>
          <div className='flex flex-col items-center gap-1'>
            <button className='w-full flex items-center rounded-full justify-center px-[26px] py-2.5 bg-light-primary text-primary-300 font-bold text-sm cursor-pointer'>
              Langganan
            </button>
            <p className='text-light-primary font-normal text-xs'>
              Syarat dan Ketentuan Berlaku
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-6 p-6 rounded-xl bg-linear-to-r from-[#537cd4]/100 from-1% to-primary-100 to-99%'>
          <h5 className='w-fit rounded-full bg-extraBackground px-5 py-2.5 font-semibold text-base'>
            Keluarga
          </h5>
          <div className='flex flex-col gap-1 text-xs font-normal'>
            <p>Mulai dari Rp159,990/bulan</p>
            <p>5-7 Akun</p>
          </div>
          <div className='flex flex-col gap-2 font-normal text-sm'>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Tidak ada iklan
            </p>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Kualitas 4K
            </p>
            <p className='flex gap-2 items-center'>
              <img src='/public/img/icon/check.svg' className='w-5' />
              Download konten pilihan
            </p>
          </div>
          <div className='border border-outlineBorder'></div>
          <div className='flex flex-col items-center gap-1'>
            <button className='w-full flex items-center rounded-full justify-center px-[26px] py-2.5 bg-light-primary text-primary-300 font-bold text-sm cursor-pointer'>
              Langganan
            </button>
            <p className='text-light-primary font-normal text-xs'>
              Syarat dan Ketentuan Berlaku
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesMembership;
