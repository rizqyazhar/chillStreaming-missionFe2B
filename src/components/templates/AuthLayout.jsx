const AuthLayout = ({ bgSrc, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/img/bg-img/bg-${bgSrc}.jpg')`,
      }}
      className='min-h-screen bg-cover bg-top'>
      <div className='absolute inset-0 bg-black/30'>
        <div className='container relative z-10 py-44 flex justify-center items-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
