import React from 'react';
import { Suspense } from 'react';
import { lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Loading from './layouts/components/loading/Loading';
import store from './redux/store/store';
const LazyApp = lazy(() => import ('./App'));
const FullPageLayout = lazy(() => import('./layouts/FullPageLayout'))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
    <Suspense fallback={<Loading />}>
    <FullPageLayout>  
    <LazyApp />
    </FullPageLayout>
    </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
