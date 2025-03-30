import AuthLayout from "../templates/AuthLayout";
import Form from "../organisms/Form";

const LoginPage = () => {
  return (
    <AuthLayout bgSrc='login' title='Masuk' subtitle='Selamat datang kembali!'>
      <Form />
    </AuthLayout>
  );
};

export default LoginPage;
