import React from "react";
import MagicCard from "../MagicCard";
import { MagicCardBox } from "../DataDisplayer/style";
import { CircularProgress, Stack, Typography } from "@mui/material";
import usePagination from "../../utils/paginator";
import { FetcherTypography } from "../DataDisplayer/style";
import { PAGES } from "../../constants";
import { Link } from "react-router";
import { HomeScrollBox } from "./style";
import { useNavigationContext } from "../../context";
import { PagesEnum } from "../../constants";

export default function HomeScroll({ name, Content, response }) {
  const page = PAGES.filter((item) => item.page === name)[0];
  const params = new URLSearchParams(document.location.search);
  const modalId = params.get("modal");

  const { handleItemClick } = useNavigationContext();
  const { data, isLoading, error } = response;
  const { paginatedData } = usePagination(data ?? [], 10);

  const handleOpenModal = (id) => {
    if (page?.page === PagesEnum.INGREDIENTS)
      handleItemClick(`${page?.route}`, page?.page, false);
    else {
      handleItemClick(`${page?.route}?modal=${id}`, page?.page, false);
    }

    window.scrollTo(0, 0);
  };
  return (
    <>
      <FetcherTypography>
        {error ? (
          name
        ) : (
          <Link
            to={page?.route}
            onClick={() => {
              handleItemClick(page?.route, page?.page, false);
              window.scroll(0, 0);
            }}
          >
            {name}
          </Link>
        )}
      </FetcherTypography>
      <HomeScrollBox>
        {error && (
          <Typography sx={{ mt: 2 }}>
            {name} are not available at the moment, please try again later
          </Typography>
        )}
        {isLoading ? (
          <>
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>Loading...</Typography>
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            {paginatedData.map((item) => (
              <MagicCardBox
                key={item?.id}
                component={Link}
                to={
                  page?.page === PagesEnum.INGREDIENTS
                    ? `${page?.route}`
                    : `${page?.route}?modal=${item?.id}`
                }
                onClick={() => handleOpenModal(item?.id)}
              >
                <MagicCard
                  data={item}
                  Content={Content}
                  isClickable={false}
                  selectedCardId={modalId}
                ></MagicCard>
              </MagicCardBox>
            ))}
          </Stack>
        )}
      </HomeScrollBox>
    </>
  );
}
