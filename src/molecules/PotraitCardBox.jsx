import PotraitCard from "../atoms/PotraitCard";
import db from "../../db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../atoms/CustomArrow";

const PotraitCardBox = ({ title }) => {
  const randomInitialSlide = Math.floor(Math.random() * db.length);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: randomInitialSlide,
    swipeToSlide: true,
    nextArrow: <NextArrow bottom='42' />,
    prevArrow: <PrevArrow bottom='42' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-11/12 relative flex flex-col mx-auto gap-5 md:gap-8 py-5 md:py-10'>
      <div className='w-full flex justify-start'>
        <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
          {title}
        </h3>
      </div>
      <div className='w-full flex flex-col'>
        <Slider {...settings}>
          {db.map((l) => (
            <PotraitCard key={l.id} src={l.img[0]} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PotraitCardBox;
