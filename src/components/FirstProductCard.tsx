// import React from 'react'

type Props = {
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  key?: string | number;
};

export const FirstProductCard = (product: Props) => {
  return (
    <div className="container  bg-white">
      <div className="bg-white shadow rounded overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto max-h-48 object-cover"
        />
        <div className="p-3">
          <h3 className="product-name">{product.name}</h3>
          <p className="">
            <span className="product-price">{product.price}</span>{" "}
            {product.oldPrice && (
              <span className="price-down">{product.oldPrice}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
