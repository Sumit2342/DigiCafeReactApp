import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  getCartTotal,
  removeItem,
  increaseItemQuantiy,
  decreaseItemQuantiy,
  addToAdminOrders,
  removeAllCartItems,
} from "../../store/features";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const [customerName, setCustomerName] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log("customerName 👉️", customerName);
    dispatch(
      addToAdminOrders({
        name: customerName,
        quantity: totalQuantity,
        orderStatus: "Processing",
      })
    );
    // 👇️ clear all input values in the form
    setCustomerName("");
    dispatch(removeAllCartItems());
  };
  return (
    <div className='App'>
      <div className='container mx-auto mt-10'>
        <div className='flex shadow-md my-10'>
          <div className='w-3/4 bg-slate-100 px-10 py-10'>
            <div className='flex justify-between border-b pb-8'>
              <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
              <h2 className='font-semibold text-2xl'>{cart.length} Items</h2>
            </div>
            <div className='flex mt-10 mb-5'>
              <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
                Product Details
              </h3>
              <h3 className='font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center'>
                Quantity
              </h3>
              <h3 className='font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center'>
                Price
              </h3>
              <h3 className='font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center'>
                Total
              </h3>
            </div>
            {cart.map((data, idx) => (
              <div key={idx}>
                <div className='flex items-center hover:bg-gray-200 -mx-8 px-6 py-5'>
                  <div className='flex w-2/5'>
                    <div className='w-20'>
                      <img className='h-24 w-24' src={data.img} alt='' />
                    </div>
                    <div className='flex flex-col justify-between ml-4 flex-grow'>
                      <span className='font-bold text-sm'>{data.name}</span>
                      <a
                        className='font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer'
                        onClick={() => dispatch(removeItem(data.id))}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className='flex justify-center w-1/5'>
                    <button
                      className='h-10 px-5 text-center bg-slate-200'
                      onClick={() => dispatch(decreaseItemQuantiy(data.id))}
                    >
                      -
                    </button>
                    <input
                      type='text'
                      className='w-10 text-center h-10  focus:outline-none '
                      value={data.quantity}
                    />
                    <button
                      className='bg-slate-200 h-10 px-5 shadow-md'
                      onClick={() => dispatch(increaseItemQuantiy(data.id))}
                    >
                      +
                    </button>
                  </div>
                  <span className='text-center w-1/5 font-semibold text-sm'>
                    ${data.price}
                  </span>
                  <span className='text-center w-1/5 font-semibold text-sm'>
                    ${data.totalFoodPrice}
                  </span>
                </div>
              </div>
            ))}

            <Link
              to='/'
              className='flex font-semibold text-indigo-600 text-sm mt-10'
            >
              <svg
                className='fill-current mr-2 text-indigo-600 w-4'
                viewBox='0 0 448 512'
              >
                <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id='summary' className='w-1/4 px-8 py-10 shadow-md bg-slate-100'>
            <h1 className='font-semibold text-2xl border-b pb-8'>
              Order Summary
            </h1>
            <div className='flex justify-between mt-10 mb-5'>
              <span className='font-semibold text-sm uppercase'>
                Total Items:
              </span>
              <span className='font-semibold text-sm'>{totalQuantity} </span>
            </div>
            <div className='border-t mt-8'>
              <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                <span>Total cost</span>
                <span>${totalPrice}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  value={customerName}
                  type='text'
                  placeholder='Enter Your Name'
                  className='rounded-md focus:outline-none border-gray-100 mb-3 shadow-md px-4 py-3'
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
                <button
                  className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'
                  type='submit'
                >
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
