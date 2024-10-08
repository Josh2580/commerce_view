// import React from 'react'

type Props = {
  name: string;
  imageUrl: string;
  key?: string | number;
};

export const FirstBatchCard = (product: Props) => {
  return (
    <div className="container  bg-white">
      <div className="bg-white shadow rounded overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover"
        />

        <h3 className="product-name p-3">{product.name}</h3>
      </div>
    </div>
  );
};
