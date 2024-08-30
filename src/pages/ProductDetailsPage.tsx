import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductImagesGallery } from "../components/ProductImagesGallery";
import { ProductInfo } from "../components/ProductInfo";
import { ProductDescription } from "../components/ProductDescription";
import { CustomerReviews } from "../components/CustomerReviews";

export const ProductDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row mt-6">
        <ProductImagesGallery />
        <ProductInfo />
      </div>

      <ProductDescription />
      <CustomerReviews />
    </div>
  );
};

// import React from "react";
// import { FaStar, FaShoppingCart, FaArrowRight } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
// import { Product } from "./types"; // Assuming you have a Product type defined somewhere

// export const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Product Image Gallery */}
//         <div className="lg:w-1/2">
//           <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
//             {product.images.map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={product.name} className="rounded-lg" />
//               </div>
//             ))}
//           </Carousel>
//         </div>

//         {/* Product Information */}
//         <div className="lg:w-1/2">
//           <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//           <p className="text-xl text-gray-700 mb-4">${product.price}</p>
//           <div className="flex items-center mb-4">
//             <FaStar className="text-yellow-500" />
//             <span className="ml-2 text-gray-600">
//               {product.rating} ({product.reviewCount} reviews)
//             </span>
//           </div>
//           <p className="mb-4 text-gray-700">{product.description}</p>

//           {/* Add to Cart Button */}
//           <button className="w-full lg:w-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition mb-4 flex items-center justify-center">
//             <FaShoppingCart className="mr-2" />
//             Add to Cart
//           </button>

//           {/* Product Specifications */}
//           <div className="border-t border-gray-300 pt-4">
//             <h3 className="text-xl font-semibold mb-2">
//               Product Specifications
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               {product.specifications.map((spec, index) => (
//                 <li key={index}>{spec}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Customer Reviews */}
//       <div className="mt-12">
//         <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
//         <div className="space-y-4">
//           {product.reviews.map((review, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <div className="flex items-center mb-2">
//                 <FaStar className="text-yellow-500" />
//                 <span className="ml-2 text-gray-600">{review.rating}</span>
//               </div>
//               <p className="text-gray-700">{review.comment}</p>
//               <p className="text-gray-500 text-sm mt-2">- {review.author}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {product.relatedProducts.map((relatedProduct) => (
//             <div
//               key={relatedProduct.id}
//               className="bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 src={relatedProduct.image}
//                 alt={relatedProduct.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
//                 <p className="text-lg font-medium text-gray-700">
//                   ${relatedProduct.price}
//                 </p>
//                 <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
//                   <FaArrowRight className="mr-2" />
//                   View Product
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
