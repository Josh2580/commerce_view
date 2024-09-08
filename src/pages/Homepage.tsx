// import React from "react";
import { HeroSecion } from "../components/Carousel";
import { Categories } from "../components/Categories";
// import { FeaturedProducts } from "../components/FeaturedProducts";
// import { PromotionalBanners } from "../components/PromotionalBanners";
// import { BestSellingProducts } from "../components/BestSellingProducts";
// import { NewArrivals } from "../components/NewArrivals";
// import { CustomerTestimonials } from "../components/CustomerTestimonials";
// import { NewsletterSignup } from "../NewsletterSignup";
// import { FlashSales } from "../components/FlashSales";
// import { BlogSection } from "../components/BlogSection";
// import { Brands } from "../components/Brands";

// // import { InstagramFeed } from "../components/InstagramFeed";

// export const Homepage: React.FC = () => {
//   return (
//     <div>
// <HeroSecion />
//       <Categories />
//       <PromotionalBanners />
//       <FeaturedProducts />
//       <BestSellingProducts />
//       <NewArrivals />
//       <CustomerTestimonials />
//       <NewsletterSignup />
//       <FlashSales />
//       <BlogSection />
//       <Brands />
//       {/* <InstagramFeed /> */}
//     </div>
//   );
// };

import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useGetProductsQuery } from "../features/products/productApi";

export const Homepage: React.FC = () => {
  const { data } = useGetProductsQuery(undefined);
  console.log(data);

  const categories = [
    { name: "Electronics", image: "/images/electronics.jpg" },
    { name: "Fashion", image: "/images/fashion.jpg" },
    { name: "Home Appliances", image: "/images/home-appliances.jpg" },
    { name: "Beauty & Health", image: "/images/beauty-health.jpg" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone XYZ",
      price: "$499",
      image: "/images/smartphone.jpg",
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: "$199",
      image: "/images/handbag.jpg",
    },
    { id: 3, name: 'LED TV 55"', price: "$699", image: "/images/tv.jpg" },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: "$99",
      image: "/images/earbuds.jpg",
    },
  ];

  const promotions = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Up to 50% off!",
      image: "/images/summer-sale.jpg",
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Check out the latest products.",
      image: "/images/new-arrivals.jpg",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      {/* <div className="bg-white">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay
          infiniteLoop
          className="w-full max-h-96"
        >
          {promotions.map((promo) => (
            <div key={promo.id}>
              <img
                src={promo.image}
                alt={promo.title}
                className="object-cover w-full h-96"
              />
              <div className="legend">
                <h3 className="text-xl font-semibold">{promo.title}</h3>
                <p>{promo.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div> */}
      <HeroSecion />
      {/* Category Highlights */}

      <Categories />

      {/* Featured Products */}
      <div className="container mx-auto py-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg font-medium text-gray-700">
                  {product.price}
                </p>
                <button className="mt-2 text-indigo-600 hover:underline flex items-center">
                  View Product <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotions/Deals */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{promo.title}</h3>
                <p className="text-gray-600">{promo.description}</p>
                <button className="mt-2 text-indigo-600 hover:underline flex items-center">
                  Shop Now <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default Homepage;
