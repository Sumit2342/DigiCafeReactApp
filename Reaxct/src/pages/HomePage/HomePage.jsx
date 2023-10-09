import React from "react";
import ProductCard from "../../utilities/productCard/ProductCard";
import Content from "../../data/content";

const HomePage = () => {
  return (
    <div className='container mx-auto px-20'>
      <div className='products'>
        <h3 className='text-3xl mb-10'>All Products</h3>
      </div>
      <div>
        {Content.map((product, i) => (
          <div key={i}>
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.img}
              desc={product.desciption}
              price={product.price}
              quantity={product.quantity}
              totalPrice={product.totalFoodPrice}
            />
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
