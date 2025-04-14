import AuthLayout from "../layouts/AuthLayout";
import InputFields from "../molecules/InputFields";

const LoginPage = () => {
  return (
    <AuthLayout title='Masuk' subTitle='Selamat Datang Kembali!' bgSrc='login'>
      <InputFields />
    </AuthLayout>
  );
};

export default LoginPage;
