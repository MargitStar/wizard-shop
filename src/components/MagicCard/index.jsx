import React from "react";

import { CardContent } from "@mui/material";
import { MagicCardBox, StyledMagicCard } from "./style";

export default function MagicCard({ Content, data }) {
  return (
    <MagicCardBox>
      <StyledMagicCard variant="outlined">
        <CardContent>
          <Content data={data} />
        </CardContent>
      </StyledMagicCard>
    </MagicCardBox>
  );
}
