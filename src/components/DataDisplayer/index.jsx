import React from "react";
import { Box, Pagination } from "@mui/material";
import {
  FetcherTypography,
  StyledLinearProgress,
  PaginationBox,
  MagicCardBox,
} from "./style";
import MagicCard from "../MagicCard";
import useFetch from "../../utils/fetcher";
import usePagination from "../../utils/paginator";

export default function DataDisplayer({ url, name, Content }) {
  const { data, error, loading } = useFetch(url);
  const { totalPages, paginatedData, currentPage, handlePageChange } =
    usePagination(data);

  // Just Logging Error For Now, not Displaying any error mesage
  if (error) {
    console.log(error);
  }

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
      <MagicCardBox>
        {paginatedData.map((row) => (
          <MagicCard key={row.id} data={row} Content={Content} />
        ))}
      </MagicCardBox>
      <PaginationBox>
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => {
              handlePageChange(value);
            }}
            color="secondary"
          />
        )}
      </PaginationBox>
    </>
  );
}
