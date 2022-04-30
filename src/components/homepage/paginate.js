import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Paginate = ({ pageCount, changePage }) => (
  <ReactPaginate
    previousLabel="prev"
    nextLabel="next"
    pageCount={pageCount}
    onPageChange={changePage}
    pageLinkClassName="disablebtn"
    previousLinkClassName="previous"
    nextLinkClassName="next"
  />
);

Paginate.propTypes = {
  changePage: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Paginate;
