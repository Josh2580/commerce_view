import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { FiltersSidebar } from "../components/FiltersSidebar";
import { ProductGrid } from "../components/ProductGrid";

export const ProductListingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row mt-6">
        <FiltersSidebar />
        <ProductGrid />
      </div>
    </div>
  );
};

// export default ProductListingPage;

// import React, { useState } from "react";
// import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Product } from "./types"; // Assuming you have a Product type defined somewhere

// export const ProductListingPage: React.FC<{ products: Product[] }> = ({
//   products,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Products</h2>
//         <div className="space-x-2">
//           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
//             Sort by Price
//           </button>
//           <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
//             Filter
//           </button>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {currentProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{product.name}</h3>
//               <p className="text-lg font-medium text-gray-700">
//                 {product.price}
//               </p>
//               <div className="flex items-center">
//                 <FaStar className="text-yellow-500" />
//                 <span className="ml-2 text-gray-600">{product.rating}</span>
//               </div>
//               <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           className={`px-4 py-2 bg-gray-200 text-gray-700 rounded-lg ${
//             currentPage === 1
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-gray-300"
//           }`}
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//         >
//           <FaChevronLeft />
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           className={`px-4 py-2 bg-gray-200 text-gray-700 rounded-lg ${
//             currentPage === totalPages
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-gray-300"
//           }`}
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };
