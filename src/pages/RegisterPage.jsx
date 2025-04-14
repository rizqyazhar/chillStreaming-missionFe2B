import Button from "../atoms/Button";
import AuthLayout from "../layouts/AuthLayout";
import ButtonFields from "../molecules/ButtonFields";
import InputFields from "../molecules/InputFields";
import { BiSolidHide } from "react-icons/bi";

const LoginPage = () => {
  return (
    <AuthLayout title='Daftar' subTitle='Selamat Datang!' bgSrc='register'>
      <InputFields
        id='username'
        type='text'
        placeholder='Masukkan username'
        htmlFor='username'
        labelText='Username'
      />
      <InputFields
        id='password'
        type='password'
        placeholder='Masukkan kata sandi'
        htmlFor='password'
        labelText='Kata Sandi'>
        <BiSolidHide className='absolute top-7 md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer' />
      </InputFields>
      <InputFields
        id='confirm-password'
        type='password'
        placeholder='Masukkan kata sandi'
        htmlFor='password'
        labelText='Konfirmasi Kata Sandi'>
        <BiSolidHide className='absolute top-[29px] md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer' />
        <div className='w-full flex justify-between font-lato mt-1.5'>
          <p className='text-light-secondary text-[10px] md:text-base tracking-[.2px] cursor-default'>
            Belum punya akun?{" "}
            <a
              to='/register'
              className='text-white text-[10px] md:text-sm cursor-pointer'>
              Daftar
            </a>
          </p>
          <p className='text-white text-[10px] md:text-base cursor-pointer'>
            <a to='register'>Lupa kata sandi?</a>
          </p>
        </div>
      </InputFields>
      <ButtonFields />
    </AuthLayout>
  );
};

export default LoginPage;
