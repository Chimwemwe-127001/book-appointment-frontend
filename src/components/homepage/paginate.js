import React from "react";
import ReactPaginate from "react-paginate";

const Paginate =({pageCount, changePage})=>{
  return (
    <ReactPaginate 
    previousLabel="prev"
    nextLabel="next"
    pageCount={pageCount}
    onPageChange={changePage}
    pageLinkClassName="disablebtn"
    previousLinkClassName={"previous"}
    nextLinkClassName={"next"}
    />
  )
}

export default Paginate;