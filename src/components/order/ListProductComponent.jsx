import React, { lazy, Suspense, useCallback } from 'react';
import Pagination from '../../layouts/components/pagination/Pagination';
import CardProductComponent from './CardProductComponent';
import Spinner from '../../layouts/components/loading/Spinner';
const NotFoundProduct = lazy(() => import('../../layouts/components/notfound/NotFoundProduct'));

export default function ListProductComponent({ listproduct, paginations, handlePageChange,forcePage }) {

  const pageCount = Math.ceil(paginations._totalRows / paginations._limit) || 1;
  const handleChange = useCallback((e) => {
      handlePageChange && handlePageChange(e.selected +1);
    },
    [handlePageChange],
  )

return (
  <div className="col-span-1 row-span-2">
    {listproduct && listproduct.length ?
    <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-4 gap-y-4 gap-x-2">
      {listproduct && listproduct?.map((value, index) => (<CardProductComponent itemproduct={value} />))}
    </div> 
    :
    <Suspense fallback={<Spinner />}>
       <NotFoundProduct />
    </Suspense>
   
   }
    <Pagination pagecount={pageCount} handlePageChange={handleChange} forcePage={forcePage-1}/>
  </div>
)
}
