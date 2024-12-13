import React, { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { FetcherTypography, StyledLinearProgress } from "./style";
import MagicCard from "../MagicCard";

export default function DataFetcherWithPagination({ url, name, Content }) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;

  const totalDataLength = data.length;
  const totalPages = Math.ceil(totalDataLength / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleFetchData = async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <>
        <Box>
          <StyledLinearProgress />
        </Box>
        <Box>
          <FetcherTypography>{name}</FetcherTypography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box>
        <FetcherTypography>{name}</FetcherTypography>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {paginatedData.map((row) => (
          <MagicCard key={row.id} data={row} Content={Content} />
        ))}
      </Box>
      {totalPages > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="secondary"
          />
        </Box>
      )}
    </>
  );
}
