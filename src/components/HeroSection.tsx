import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
import Product5 from "../assets/product-5.jpg";
import Product6 from "../assets/product-6.jpg";
import Product7 from "../assets/product-7.jpg";
import Product8 from "../assets/product-8.jpg";
import Product9 from "../assets/product-9.jpg";
import Product10 from "../assets/product-10.jpg";
import Product11 from "../assets/product-11.jpg";
import Product12 from "../assets/product-12.jpg";

// Define the HeroSection component
export const HeroSecion = () => {
  // Array of image URLs to display in the carousel
  const images = [
    Product5,
    Product6,
    Product7,
    Product8,
    Product1,
    Product2,
    Product3,
    Product4,
    Product9,
    Product10,
    Product11,
    Product12,
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="bg-indigo-700">
      <div className="my-responisve py-0 my-0">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          centerMode={false}
          partialVisible={false}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["mobile"]}
          // dotListClass="my-carousel-herosection-dotListClass"
          containerClass="my-carousel-herosection-containerClass"
          itemClass="my-carousel-herosection-itemClass"
          sliderClass="my-carousel-herosection-sliderClass"
        >
          {images.map((image, index) => (
            <Link className="" key={index} to="#">
              <div key={index} className="">
                {/* Image element */}
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="my-square-image object-fill"
                />
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
