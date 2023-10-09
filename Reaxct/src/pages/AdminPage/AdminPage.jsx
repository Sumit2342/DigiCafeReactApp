import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAdminOrderStatus,
  deleteAdminOrders,
} from "../../store/features";

const AdminPage = () => {
  const { adminOrders } = useSelector((state) => state.allCart);
  console.log("admin order lenght " + adminOrders.length);
  const dispatch = useDispatch();

  return (
    <div className='Admin container mx-auto px-20'>
      <div class='flex flex-col'>
        <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div class='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div class='overflow-hidden'>
              <table class='min-w-full text-left text-sm font-light'>
                <thead class='border-b font-medium dark:border-neutral-500'>
                  <tr>
                    <th scope='col' class='px-6 py-4'>
                      #
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Order No
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Status
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Custormer Name
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Qty
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Update Order Status
                    </th>
                    <th scope='col' class='px-6 py-4'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {adminOrders.map((order, key) => (
                    <tr class='border-b dark:border-neutral-500'>
                      <td class='whitespace-nowrap px-6 py-4 font-medium'>
                        {key + 1}
                      </td>
                      <td class='whitespace-nowrap px-6 py-4'>{key + 1}</td>
                      <td class='whitespace-nowrap px-6 py-4'>
                        {order.orderStatus}
                      </td>
                      <td class='whitespace-nowrap px-6 py-4'>{order.name}</td>
                      <td class='whitespace-nowrap px-6 py-4'>
                        {order.quantity}
                      </td>
                      <td class='whitespace-nowrap px-6 py-4'>
                        <select
                          className='rounded-md focus:outline-none border-gray-100 mb-3 shadow-sm px-6 py-3 bg-slate-200'
                          onChange={(e) =>
                            dispatch(
                              updateAdminOrderStatus({
                                status: e.target.value,
                                id: key,
                              })
                            )
                          }
                        >
                          <option value='Processing' className='text-black'>
                            Processing
                          </option>
                          <option value='Completed' className='text-green-600'>
                            Completed
                          </option>
                          <option value='Cancelled' className='text-red-500'>
                            Cancelled
                          </option>
                        </select>
                      </td>
                      <td class='whitespace-nowrap px-6 py-4'>
                        <button
                          className='px-4 py-3 shadow-sm bg-slate-200 rounded-md'
                          onClick={() => dispatch(deleteAdminOrders(key))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
