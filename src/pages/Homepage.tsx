import React from "react";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { PromotionalBanners } from "../components/PromotionalBanners";
import { BestSellingProducts } from "../components/BestSellingProducts";
import { NewArrivals } from "../components/NewArrivals";
import { CustomerTestimonials } from "../components/CustomerTestimonials";
import { NewsletterSignup } from "../NewsletterSignup";
import { FlashSales } from "../components/FlashSales";
import { BlogSection } from "../components/BlogSection";
import { Brands } from "../components/Brands";

// import { InstagramFeed } from "../components/InstagramFeed";

export const Homepage: React.FC = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <PromotionalBanners />
      <FeaturedProducts />
      <BestSellingProducts />
      <NewArrivals />
      <CustomerTestimonials />
      <NewsletterSignup />
      <FlashSales />
      <BlogSection />
      <Brands />
      {/* <InstagramFeed /> */}
    </div>
  );
};
