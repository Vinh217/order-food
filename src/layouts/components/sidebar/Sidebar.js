import { HomeIcon, MinusCircleIcon, MinusIcon, PlusCircleIcon, ShoppingCartIcon, TrashIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, hideMiniCart, removeFromCart, subToCart } from '../../../redux/slice/CartSlice';
import { cartTotalSelector } from '../../../redux/slice/selector';
import './style.css';
import CartEmpty from '../notfound/CartEmpty'
import { useNavigate,useLocation} from 'react-router';
const queryString = require('query-string');

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // let url = new URL(window.location.href);
  // const location = new URLSearchParams(url.search.slice(1));

  const parse = queryString.parse(location.search);

  const { showMiniCart, cartItems } = useSelector(state => state.cart);
  const cartTotal = useSelector(cartTotalSelector);
  const handleClick = () => {
    const action = hideMiniCart();
    dispatch(action);
  }

  const [IsShow, setIsShow] = useState(false);

  const handleSubClick = (id) => {
    const productItem = cartItems.productItem;
    const action = subToCart({
      id,
      productItem,
      quantity: 1,
    });
    dispatch(action);
  }

  const handleAddClick = (id) => {
    const productItem = cartItems.productItem;
    const action = addToCart({
      id,
      productItem,
      quantity: 1,
    });
    dispatch(action);
  }

  const handleRemoveClick = (id) => {
    const action = removeFromCart({
      id,
    });
    dispatch(action);
  }

  const handleShowOrderInfo = () => {
    setIsShow(!IsShow);
  }

  const handleReturnClick = () => {
    delete parse._page;
    navigate({
      pathname: 'order',
      search: queryString.stringify({...parse,_page:1}),
    })
  }

  return (
    <div className={showMiniCart ? "cart active" : "cart"}>
      <div className="cart-overlay" onClick={handleClick}></div>
      <div className="cart-food">
        <div className="border-b-2 flex justify-between items-center pb-4">
          <h2 className="font-semibold text-2xl">SHOPPING CART</h2>
          <button onClick={handleClick}>
            {showMiniCart ? <XIcon className="h-8 w-8 stroke-1 stroke-current hover:scale-125 duration-700 ease-in-out" /> : <MinusIcon className="h-8 w-8 stroke-1 stroke-current transition-all delay-75" />}
          </button>
        </div>
        <div className="flex flex-col flex-1">
          {cartItems && cartItems.length ?
          <div className="flex flex-col flex-1">
            {cartItems && cartItems?.map((item, index) => (
              <div key={item.id} className="pt-4">
                <div className="flex items-center justify-between gap-3">
                  <LazyLoadImage src={item['productItem'].img} alt="food" throttle={5000} effect="blur" height={80} width={80} className="flex-shrink-0 w-full h-full object-cover" />
                  <div class="flex flex-col justify-start flex-1 gap-1">
                    <span className="font-semibold text-sm">{item['productItem'].name}</span>
                    <div className="text-red-500 font-bold">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item['productItem'].price)}</div>
                    <div className="flex items-center gap-2">
                      <MinusCircleIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => handleSubClick(item.id)} />
                      <span>{item.quantity}</span>
                      <PlusCircleIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => handleAddClick(item.id)} />
                    </div>
                  </div>
                  <TrashIcon className="w-5 h-5 text-gray-300 cursor-pointer" onClick={() => handleRemoveClick(item.id)} />
                </div>
              </div>
            ))}
          </div>
          : <CartEmpty />
          }
          <div className="mt-auto border-t-2">
            <div className="flex justify-center items-center transition-all duration-500 pb-8 cursor-pointer relative before:w-40 before:h-2 before:absolute before:top-2 before:bg-gray-500 before:rounded-full" onClick={handleShowOrderInfo}></div>
            <div className={IsShow ? "opacity-1 transition-all duration-300 px-2 flex flex-col gap-4 pb-20 h-40" : "opacity-0 transition-all duration-300 px-2 flex flex-col gap-4 translate-y-1/2 h-0"}>
              <div className="text-xl font-bold">Order Info</div>
              <div className="flex justify-between">
                <span className="text-base text-gray-400">Discount</span>
                <span className="text-base font-bold text-gray-800">$100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-gray-400">Shipping Cost</span>
                <span className="text-base font-bold text-gray-800">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-gray-400">Voucher</span>
                <span className="text-base font-bold text-gray-800">0</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total</span>
              <span className="text-red-500 font-bold text-2xl">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartTotal)}</span>
            </div>
            <div className="flex justify-between items-center my-2 gap-4">
              <div className="flex bg-red-500 rounded-full w-1/2 drop-shadow-2xl z-999 cursor-pointer justify-center items-center gap-2">
                <ShoppingCartIcon className="text-white w-4 h-4" />
                <span className="font-semibold text-white py-2 text-sm">CHECKOUT</span>
              </div>
              <div className="flex bg-white rounded-full w-1/2 h-10 z-999 cursor-pointer justify-center items-center drop-shadow-2xl gap-2">
                <HomeIcon className="text-black w-4 h-4" />
                <span className="text-gray-800 font-semibold py-4 text-sm" onClick={handleReturnClick}>BUY MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}