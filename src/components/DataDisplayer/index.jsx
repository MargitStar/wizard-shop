import React from "react";
import { Box, Pagination } from "@mui/material";
import { FetcherTypography, StyledLinearProgress } from "./style";
import MagicCard from "../MagicCard";
import useFetch from "../../utils/fetcher";
import usePagination from "../../utils/paginator";

export default function DataDisplayer({ url, name, Content }) {
  const { data, loading } = useFetch(url);
  const { totalPages, paginatedData, currentPage, handlePageChange } =
    usePagination(data);

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
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
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
            onChange={(event, value) => {
              handlePageChange(value);
            }}
            color="secondary"
          />
        </Box>
      )}
    </>
  );
}
