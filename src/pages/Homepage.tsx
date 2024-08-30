// import React from "react";
// import { Carousel } from "../components/Carousel";
// import { Categories } from "../components/Categories";
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
//       <Carousel />
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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export const Homepage: React.FC = () => {
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
      <div className="bg-white">
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
      </div>

      {/* Category Highlights */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <button className="mt-2 text-indigo-600 hover:underline flex items-center">
                  Shop Now <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Company Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Corporate Responsibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; 2024 Your Store Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// export default Homepage;
