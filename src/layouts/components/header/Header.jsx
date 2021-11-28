/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HomeIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import {ShoppingCartIcon} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { showMiniCart } from '../../../redux/slice/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import {cartItemsCountSelector} from '../../../redux/slice/selector';

const navigation = [
  { name: 'Page', to: '/', current: true },
  { name: 'Order Online', to: 'order', current: false },
  { name: 'News', to: '#', current: false },
  { name: 'Store locations', to: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
  const [navbar,setNavBar] = useState(false);
  const dispatch = useDispatch();
  const cartItemCount = useSelector(cartItemsCountSelector);
  const changColorNavBar =() => {
    if(window.scrollY > 10 ) {
      setNavBar(true);
    }
    else { 
      setNavBar(false);
    } 
  }
  window.addEventListener('scroll',changColorNavBar);

  const handleClick = () => {
    const action = showMiniCart();
    dispatch(action);
  }

  return (
    <Disclosure as="nav" className ={navbar ? "bg-black bg-opacity-80 fixed top-0 w-full z-50" : "bg-transparent fixed top-0 w-full z-50"}>
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="flex-shrink-0 flex items-center cursor-pointer" to="/">
                  <LazyLoadImage
                    className="block lg:hidden h-8 w-auto"
                    src="/static/media/logo.59e734ae.svg"
                    alt="food-logo"
                  />
                  <LazyLoadImage
                    className="hidden lg:block h-8 w-auto"
                    src="/static/media/logo.59e734ae.svg"
                    alt="food-logo"
                  />
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link to="order" className="text-white mt-1 flex items-center gap-2">
                      <HomeIcon className="w-4 h-4"/>
                      <span className="text-sm">Pages</span>
                    </Link>
                    <Link to="order" className="text-white mt-1 flex items-center gap-2">
                      <HomeIcon className="w-4 h-4"/>
                      <span className="text-sm">Order Online</span>
                    </Link>
                    <Link to="order" className="text-white mt-1 flex items-center gap-2">
                      <HomeIcon className="w-4 h-4"/>
                      <span className="text-sm">News</span>
                    </Link>          
                    <Link to="order" className="text-white mt-1 flex items-center gap-2">
                      <HomeIcon className="w-4 h-4"/>
                      <span className="text-sm">Store Location</span>
                    </Link>
                    
                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative" onClick={handleClick}
                >
                  <ShoppingCartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  <div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-4 left-4 font-semibold text-white">{cartItemCount}</div>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className=" relative ml-12">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <LazyLoadImage
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
