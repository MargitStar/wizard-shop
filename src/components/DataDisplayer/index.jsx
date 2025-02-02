import React from "react";
import { Box, Pagination } from "@mui/material";
import {
  FetcherTypography,
  StyledLinearProgress,
  PaginationBox,
  MagicCardBox,
} from "./style";
import MagicCard from "../MagicCard";
import usePagination from "../../utils/paginator";

export default function DataDisplayer({
  name,
  Content,
  response,
  useModalDataQuery,
  ModalContent,
}) {
  const { data, isLoading, error } = response;
  const { totalPages, paginatedData, currentPage, handlePageChange } =
    usePagination(data ?? []);

  // Just Logging Error For Now, not Displaying any error mesage
  if (error) {
    console.log(error);
  }

  if (isLoading) {
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
          <MagicCard
            key={row.id}
            data={row}
            Content={Content}
            useModalDataQuery={useModalDataQuery}
            ModalContent={ModalContent}
          />
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
