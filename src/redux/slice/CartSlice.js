const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex(x => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    subToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex(x => x.id === newItem.id);
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity -= newItem.quantity;
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check if product is avaiable in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) { state.cartItems[index].quantity = quantity };

    },
    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(x => x.id !== idNeedToRemove.id);
    },
  }
})

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart,subToCart,setQuantity,removeFromCart } = actions;
export default reducer;
