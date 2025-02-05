import React, { useState } from "react";
import MagicCard from "../MagicCard";
import { MagicCardBox } from "../DataDisplayer/style";
import { CircularProgress, Stack, Typography } from "@mui/material";
import usePagination from "../../utils/paginator";
import { FetcherTypography } from "../DataDisplayer/style";
import { PAGES } from "../../constants";
import { Link } from "react-router";
import { HomeScrollBox } from "./style";
import { useNavigationContext } from "../../context";

export default function HomeScroll({ name, Content, response }) {
  const page = PAGES.filter((item) => item.page === name)[0];
  const params = new URLSearchParams(document.location.search);
  const modalId = params.get("modal");
  const { handleItemClick } = useNavigationContext();

  const [selectedCardId, setSelectedCardId] = useState(modalId);

  const { data, isLoading, error } = response;
  const { paginatedData } = usePagination(data ?? [], 10);

  const handleOpenModal = (id) => {
    handleItemClick(`${page?.route}?modal=${id}`, page?.page);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <FetcherTypography>
        <Link
          to={page?.route}
          onClick={() => {
            handleItemClick(page?.route, page?.page, false);
            window.scroll(0, 0);
          }}
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
                <MagicCard
                  data={item}
                  Content={Content}
                  showModal={false}
                  homeModal={true}
                  handleOpenHomeModal={handleOpenModal}
                  setSelectedCardId={setSelectedCardId}
                  selectedCardId={selectedCardId}
                ></MagicCard>
              </MagicCardBox>
            ))}
          </Stack>
        )}
      </HomeScrollBox>
    </>
  );
}
