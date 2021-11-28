import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './layouts/components/loading/Loading';
import Wrapper from './screen/order/Wrapper';
const Detail = lazy(() => import('./screen/detail'))
const Home = lazy(() => import('./screen/home'))
const NotFound = lazy(() => import('./layouts/components/notfound/NotFound'))
const Order = lazy(() => import('./screen/order'))

export default function AppRouter() {
  return (
      <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Wrapper />} >
                <Route path="" element={<Order />} />
                <Route path=":category/:id" element={<Detail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Suspense>
  )
}
