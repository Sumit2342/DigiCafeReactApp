import { createSlice } from "@reduxjs/toolkit";
import content from "../data/content";

const initialState = {
  cart: [],
  items: content,
  totalQuantity: 0,
  totalPrice: 0,
  adminOrders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find === 1 || find === 0) {
        state.cart[find].quantity += 1;
        state.cart[find].totalFoodPrice =
          state.cart[find].quantity * state.cart[find].price;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantiy: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantiy: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    addToAdminOrders: (state, action) => {
      state.adminOrders.push(action.payload);
    },
    removeAllCartItems: (state) => {
      state.cart = [];
    },
    deleteAdminOrders: (state, action) => {
      console.log("delete");
      state.adminOrders = state.adminOrders.filter(
        (item, id) => id !== action.payload
      );
    },
    updateAdminOrderStatus: (state, action) => {
      state.adminOrders.map((item, key) => {
        if (key === action.payload.id) {
          item.orderStatus = action.payload.status;
        }
      });
    },
  },
});

export const {
  addToCart,
  increaseItemQuantiy,
  decreaseItemQuantiy,
  getCartTotal,
  removeItem,
  addToAdminOrders,
  removeAllCartItems,
  deleteAdminOrders,
  updateAdminOrderStatus,
} = cartSlice.actions;

export default cartSlice.reducer;
