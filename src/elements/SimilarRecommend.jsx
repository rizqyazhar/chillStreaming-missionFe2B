import db from "../../db.json";
import PotraitCard from "./PotraitCard";

const SimilarRecommend = () => {
  return (
    <div className='w-full bg-pageHeaderBackground text-light-primary px-5 py-2.5 md:px-16 md:py-6 flex flex-col gap-2 md:gap-7'>
      <h6 className='md:font-bold text-sm md:text-2xl'>Rekomendasi Serupa</h6>
      <div className='w-full grid grid-cols-3 justify-center'>
        {[...db]
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((l) => (
            <PotraitCard key={l.id} src={l.img[0]} />
          ))}
      </div>
    </div>
  );
};

export default SimilarRecommend;
