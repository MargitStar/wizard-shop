import React from "react";
import MagicCard from "../MagicCard";
import { MagicCardBox } from "../DataDisplayer/style";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import usePagination from "../../utils/paginator";
import { FetcherTypography } from "../DataDisplayer/style";
import { PAGES } from "../../constants";
import { Link } from "react-router";
import { HomeScrollBox } from "./style";

export default function HomeScroll({
  name,
  Content,
  response,
  handleItemClick,
}) {
  const { data, isLoading, error } = response;
  const { paginatedData } = usePagination(data ?? [], 10);
  const page = PAGES.filter((item) => item.page === name)[0];
  return (
    <>
      <FetcherTypography>
        <Link
          to={page?.route}
          onClick={() => handleItemClick(page?.route, page?.page)}
        >
          {name}
        </Link>
      </FetcherTypography>
      <HomeScrollBox>
        {isLoading ? (
          <>
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>Loading...</Typography>
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            {paginatedData.map((item) => (
              <MagicCardBox key={item?.id}>
                <MagicCard data={item} Content={Content}></MagicCard>
              </MagicCardBox>
            ))}
          </Stack>
        )}
      </HomeScrollBox>
    </>
  );
}
