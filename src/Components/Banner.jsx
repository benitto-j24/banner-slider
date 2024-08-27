import React from "react";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import imgData from "../imageData.json";

const Banner = () => {
  console.log(imgData);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <GrNext
        className=" size-[70px] z-10  text-black absolute cursor-pointer right-0 top-[40%]"
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <GrPrevious
        className=" size-[70px] z-10 text-black cursor-pointer absolute left-0 top-[40%]"
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="mt-3 flex flex-col w-[90%] justify-center h-[450px] object-cover relative outline-none ">
      <Slider {...settings}>
        {imgData.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="h-[400px] flex w-full overflow-hidden"
              >
                <img
                  src={item.image}
                  className="bg-cover object-cover bg-center h-full w-full"
                  alt="banner"
                />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
