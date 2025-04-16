import db from "../../db.json";
import PotraitCard from "../elements/PotraitCard";

const Mylist = () => {
  return (
    <main className='max-w-screen bg-pageHeaderBackground pb-20'>
      <section className='w-11/12 relative flex flex-col mx-auto gap-5 md:gap-8 py-5 md:py-10'>
        <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
          Daftar Saya
        </h3>
        <div className='w-full flex flex-wrap md:gap-x-4 md:gap-y-8'>
          {db.map((l) => (
            <PotraitCard key={l.id} src={l.img[0]} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Mylist;
