import { Link } from "react-router-dom";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FirstProductCard } from "./FirstProductCard";

const sponsoredProducts = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: "$499",
    image: Product1,
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: "$199",
    image: Product2,
  },
  { id: 3, name: 'LED TV 55"', price: "$699", image: Product3 },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "$99",
    image: Product4,
  },
  {
    id: 5,
    name: "Smartphone XYZ",
    price: "$499",
    image: Product1,
  },
  {
    id: 6,
    name: "Designer Handbag",
    price: "$199",
    image: Product2,
  },
  { id: 7, name: 'LED TV 55"', price: "$699", image: Product3 },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: "$99",
    image: Product4,
  },
  {
    id: 9,
    name: "Smartphone XYZ",
    price: "$499",
    image: Product1,
  },
  {
    id: 10,
    name: "Designer Handbag",
    price: "$199",
    image: Product2,
  },
  { id: 11, name: 'LED TV 55"', price: "$699", image: Product3 },
  {
    id: 12,
    name: "Wireless Earbuds",
    price: "$99",
    image: Product4,
  },
];

export const Sponsored = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 7,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 6,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 4,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className=" bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">Sponsored</h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={3000}
        keyBoardControl={true}
        // // customTransition="all .5"
        // customTransition="all 1"
        // transitionDuration={500}
        // transitionDuration={1000}
        // removeArrowOnDeviceType={["mobile"]}
        // dotListClass="my-carousel-category-dotListClass"
        containerClass="my-carousel-category-containerClass"
        itemClass="my-carousel-category-itemClass"
        sliderClass="my-carousel-category-sliderClass"
      >
        {sponsoredProducts.map((product, i) => (
          <Link
            className=""
            key={i}
            to={`category/${product.name}/${product.id}`}
          >
            <FirstProductCard
              key={product.id}
              name={product.name}
              oldPrice={333.55}
              price={222.33}
              imageUrl={product.image}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
