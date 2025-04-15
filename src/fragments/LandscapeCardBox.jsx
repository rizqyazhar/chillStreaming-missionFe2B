import LandscapeCard from "../elements/LandscapeCard";
import db from "../../db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../elements/CustomArrow";

const LandscapeCardBox = ({ title }) => {
  const randomInitialSlide = Math.floor(Math.random() * db.length);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: randomInitialSlide,
    swipeToSlide: true,
    nextArrow: <NextArrow bottom='15' />,
    prevArrow: <PrevArrow bottom='15' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='relative w-11/12 mx-auto flex flex-col gap-5 md:gap-6 py-5 md:py-10'>
      <div className='w-full flex justify-start'>
        <h3 className='font-lato font-bold text-xl md:text-[32px] text-white cursor-default'>
          {title}
        </h3>
      </div>
      <div className='flex flex-col gap-3'>
        <Slider {...settings}>
          {db.map((l) => (
            <LandscapeCard key={l.id} src={l.img[1]} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandscapeCardBox;
