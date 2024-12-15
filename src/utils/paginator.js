import { useState } from "react";

function usePagination(data, itemsPerPage = 16) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalDataLength = data.length;
  const totalPages = Math.ceil(totalDataLength / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };

  return { totalPages, paginatedData, currentPage, handlePageChange };
}

export default usePagination;
