import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Paginate = ({ pageCount, changePage }) => (
  <ReactPaginate
    previousLabel="&#5130;"
    nextLabel="&#5125;"
    pageCount={pageCount}
    onPageChange={changePage}
    pageLinkClassName="page-btns"
    previousLinkClassName="previous-btn"
    nextLinkClassName="next-btn"
    disabledLinkClassName="disable-btns"
  />
);

Paginate.propTypes = {
  changePage: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Paginate;
