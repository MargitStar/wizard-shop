import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import {
  FetcherTypography,
  StyledLinearProgress,
  PaginationBox,
  MagicCardBox,
} from "./style";
import MagicCard from "../MagicCard";
import usePagination from "../../utils/paginator";
import MagicModal from "../MagicModal";
import { useNavigate } from "react-router";
import ErrorModal from "../ErrorModal";
import { useNavigationContext } from "../../context";
import { PAGES, PagesEnum } from "../../constants";
import MagicCardData from "../shared/types/MagicCardData";
import ErrorProp from "../shared/types/Error";

type DataDisplayerProps = {
  name: string;
  Content: React.FC<{ data: MagicCardData }>;
  response: {
    data: MagicCardData[];
    isLoading: boolean;
    error?: ErrorProp;
  };
  useModalDataQuery: (id: string) => {
    data: MagicCardData;
    isLoading: boolean;
    error?: ErrorProp;
  };
  ModalContent: React.FC<{ data: MagicCardData }>;
  showModal?: boolean;
};

const DataDisplayer = ({
  name,
  Content,
  response,
  useModalDataQuery,
  ModalContent,
  showModal = true,
}: DataDisplayerProps) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = response;
  const { totalPages, paginatedData, currentPage, handlePageChange } =
    usePagination(data ?? []);

  const { handleItemClick } = useNavigationContext();
  const params = new URLSearchParams(document.location.search);
  const modalId = params.get("modal");
  const [selectedCardId, setSelectedCardId] = useState<string | null>(modalId);

  const handleCloseModal = () => {
    setSelectedCardId("");
    navigate(``, { replace: true });
  };

  const handleOpenModal = (id: string | undefined) => {
    if (!id) return;
    window.history.pushState("", "", window.location.href + `?modal=${id}`);
    setSelectedCardId(id);
  };

  if (error) {
    console.log("Error >>>", error);
    const homePage = PAGES.find((item) => item.page === PagesEnum.HOME);
    return (
      <ErrorModal
        openModal={true}
        error={error}
        handleClose={() => handleItemClick(homePage?.route, homePage?.page)}
      />
    );
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
        {paginatedData.map((row: { id: string }) => (
          <MagicCard
            key={row.id}
            data={row}
            Content={Content}
            isClickable={showModal}
            selectedCardId={selectedCardId}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </MagicCardBox>
      {selectedCardId && showModal && (
        <MagicModal
          open={!!selectedCardId}
          handleClose={handleCloseModal}
          id={selectedCardId}
          useModalDataQuery={useModalDataQuery}
          ModalContent={ModalContent}
        />
      )}
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
};

export default DataDisplayer;
