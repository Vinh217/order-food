import React from 'react'
import ReactPaginate from 'react-paginate'
import './style.css'
export default function Pagination({pagecount,forcePage,handlePageChange}) {
  return (
    <ReactPaginate
    previousLabel={"<"}
    nextLabel={">"}
    pageCount={pagecount}
    onPageChange={handlePageChange}
    containerClassName={"paginationBttns"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
    forcePage={forcePage}
  />
  )
}
