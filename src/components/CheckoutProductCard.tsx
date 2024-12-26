type Props = {
  cartId: number;
  productId: number;
  name: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  stock: number;
  size?: string;
  color?: string;
  imageUrl: string;
  // key: number;
};

export const CheckoutProductCard = (product: Props) => {
  // console.log(product);
  return (
    <div className="flex h-fit gap-2 md:gap-4 items-center border-b border-b-gray-200">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-20 md:w-40   object-cover aspect-square my-line-clamp-2"
      />

      <div className="flex flex-col p-1 mt-2 h-full  items-start justify-between w-full">
        <h3 className="text-xs md:text-base my-line-clamp-2 md:my-line-clamp-3 pb-1 text-gray-600">
          {product.name}
        </h3>
        <h3 className="text-xs md:text-base"> Qty {product.quantity}</h3>
      </div>
    </div>
  );
};
