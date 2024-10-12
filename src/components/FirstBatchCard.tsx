// import React from 'react'

type Props = {
  name: string;
  imageUrl: string;
  key?: string | number;
};

export const FirstBatchCard = (product: Props) => {
  return (
    <div className="bg-white">
      <div className="bg-white shadow rounded overflow-hidden  md:w-full">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="my-square-image"
        />

        <h3 className="product-name p-1 sm:p-2">{product.name}</h3>
      </div>
    </div>
  );
};
