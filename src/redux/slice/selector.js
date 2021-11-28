import {createSelector} from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart.cartItems;

//Count number of products in cart
export const cartItemsCountSelector = createSelector(
  cartItemSelector, 
  (cartItems) => cartItems.reduce((count,item) => count + item.quantity,0)
  );
  
export const cartTotalSelector = createSelector(
  cartItemSelector,
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.productItem.price, 0)
);