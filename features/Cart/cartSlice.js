import {createSlice} from '@reduxjs/toolkit';
import {showToast} from '../../Common/methods';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      var index = state.cart.findIndex(
        product =>
          product.id === action.payload.id ||
          product.id === action.payload.product_id,
      );
      if (index === -1) {
        state.cart.unshift(action.payload);
        if (state.cart[0].product_id !== undefined) {
          state.cart[0].id = state.cart[0].product_id;
          state.cart[0].url_link = state.cart[0].product_image;
        }
        state.cart[0].count = 1;
      } else {
        state.cart[index].count = state.cart[index]?.count + 1;
      }
      showToast('Added to cart successfully.', 'short');
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
    emptyCart: state => {
      state.cart = [];
    },
    increase: (state, action) => {
      var index = state.cart.findIndex(
        product => product.id === action.payload,
      );
      state.cart[index].count += 1;
    },
    decrease: (state, action) => {
      var index = state.cart.findIndex(
        product => product.id === action.payload,
      );
      if (state.cart[index].count === 1) {
        state.cart = state.cart.filter(
          product => product.id !== action.payload,
        );
      } else {
        state.cart[index].count -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, increase, decrease, emptyCart} =
  cartSlice.actions;

export default cartSlice.reducer;
