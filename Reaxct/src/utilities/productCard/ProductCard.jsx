import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const item = {
    id: props.id,
    name: props.name,
    img: props.image,
    desc: props.desc,
    price: props.price,
    quantity: props.quantity,
    totalFoodPrice: props.totalPrice,
  };
  return (
    <div className='mb-8 flex justify-between items-center'>
      <div className='product-desc'>
        <h3 className='font-bold py-2'>{props.name}</h3>
        <img
          src={props.image}
          alt='images'
          className=' h-[200px] w-[250px] rounded-sm mb-2'
        />
        <h6 className='font-light'>{props.desc}</h6>
      </div>
      <div className='flex flex-col gap-7 items-center'>
        {/* <div className='flex items-center bg-slate-50 shadow-md'>
          <button className='h-10 px-5 text-center bg-slate-200'>-</button>
          <input
            type='text'
            className='w-10 text-center h-10  focus:outline-none ' value=""
          />
          <button className='bg-slate-200 h-10 px-5 shadow-md'>+</button>
        </div> */}
        <button
          onClick={() => dispatch(addToCart(item))}
          className='px-4 py-3 border-2 border-gray-200 rounded-3xl'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
