import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import Table from "./Table";

const Pagination = ({ data }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(data);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  console.log(itemOffset);

  return (
    <>
      <Table data={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-prev"
        nextLinkClassName="page-next"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Pagination;

Pagination.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      no: PropTypes.number,
      source: PropTypes.string,
      destination: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};
