import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favourites = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" flex flex-col justify-center  w-full  ">
      <Slider {...settings}>
        <div className="">
          <img
            className="object-cover w-full h-full"
            src={img2}
            alt="slider1"
          />
        </div>

        <div className="">
          <img
            className="object-cover w-full h-full"
            src={img1}
            alt="slider1"
          />
        </div>

        <div className="">
          <img
            className="object-cover w-full h-full"
            src={img2}
            alt="slider1"
          />
        </div>

        <div className="">
          <img
            className="object-cover w-full h-full"
            src={img1}
            alt="slider1"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Favourites;
