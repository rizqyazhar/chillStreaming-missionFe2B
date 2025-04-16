import db from "../../db.json";
import PotraitCard from "../elements/PotraitCard";
import Content from "../fragments/Content";

const Mylist = ({ toggle }) => {
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
          {db.map((l) => (
            <PotraitCard key={l.id} src={l.img[0]} />
          ))}
        </div>
      </section>
    </Content>
  );
};

export default Mylist;
