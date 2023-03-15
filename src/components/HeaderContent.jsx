import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

const HeaderContent = () => {
  return (
    <div>
      <div className="bg-blue-200 shadow-lg rounded-lg overflow-hidden animate-fade-in-up">
        <div className="flex flex-col lg:flex-row justify-between items-center mt-2 ml-2 bg-white h-[60vh] shadow-lg rounded-lg overflow-hidden animate-fade-in-up">
          <div className="sm:flex items-center px-6 py-4">
            <div className=" flex justify-center items-center mb-2 text-6xl   mx-auto animate-fade-in-left">
              👘
            </div>
            <div className="text-center sm:text-left sm:ml-4 sm:my-2 animate-fade-in-right">
              <h1
                className={`gradient font-bold text-3xl text-white uppercase mb-2`}
              >
                ROYALE ENTERPRISE
              </h1>
              <p className=" font-mono">
                <p className=" font-bold text-4xl"> New</p>
                <br /> <p className=" text-3xl">Collections</p>
              </p>
              <div className="mt-4 flex items-center justify-center animate-fade-in-up">
                <input
                  className="w-[80%] p-2 border border-gray-300 rounded-l-lg shadow-md focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
                <button className="bg-[#FFD700] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-r-lg shadow-md ml-2 animate-pulse">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l5.792 5.792M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className=" ">
              <Slider {...settings}>
                <div className=" w-20 bg-black ">
                  <div className=" ">
                    <img src={img1} alt="slider1" />
                  </div>

                  <div className=" ">
                    <img src={img1} alt="slider1" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
