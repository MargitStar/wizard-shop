import React, { useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import {
  FetcherTypography,
  StyledLinearProgress,
  PaginationBox,
  MagicCardBox,
} from "./style";
import MagicCard from "../MagicCard";
import { useSelector, useDispatch } from "react-redux";
import usePagination from "../../utils/paginator";
import { useGetElixirsQuery } from "../../utils/api";

export default function DataDisplayer({ url, name, Content, fetcher }) {
  // const dispatch = useDispatch();
  // console.log(fetcher);
  const { data, isLoading, error } = fetcher();
  // console.log(fetcher());
  const { totalPages, paginatedData, currentPage, handlePageChange } =
    usePagination(data ?? []);

  // useEffect(() => {
  //   if (url) {
  //     dispatch(fetchData(url));
  //   }
  // }, [url, dispatch]);

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
