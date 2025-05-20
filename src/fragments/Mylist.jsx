import Content from "./Content";

const MyList = ({ toggle, listingAdd }) => {
  return (
    <Content>
      <section className='w-11/12 relative flex flex-col mx-auto gap-5 md:gap-8 py-5 md:py-10'>
        <div className='flex justify-between items-center'>
          <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
            Daftar Saya
          </h3>
          {toggle}
        </div>
        <div className='w-full flex flex-wrap gap-x-1 gap-y-4 md:gap-x-4 md:gap-y-8'>
          {listingAdd.map((item) => (
            <div key={item.id} className='bg-gray-800 p-2 rounded'>
              <img src={item.img[0]} alt={item.title} />
              <h2 className='mt-2 text-center'>{item.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </Content>
  );
};

export default MyList;
