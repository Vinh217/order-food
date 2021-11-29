import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/CartSlice';
import userReducer from '../slice/UserSlice';

const rootReducer = {
  cart: cartReducer,
  user: userReducer,
}
const store = configureStore({
  reducer: rootReducer,
})

export default store;