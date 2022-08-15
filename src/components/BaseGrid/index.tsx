import { Grid, styled } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

// Specifications of Material Design
// (xs) 0-599dp: Fixed margin of 16dp;
// (sm) 600-904dp: Fixed margin of 32dp;
// (md) 905-1239dp: Fixed width of 840dp;
// (lg) 1240-1439: Fixed margin of 200dp;
// (xl) 1440dp+: Fixed width of 1040dp

const Viewport = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: { width: "1040px" },
  [theme.breakpoints.down("xl")]: { width: "calc(100% - 200px)" },
  [theme.breakpoints.down("lg")]: { width: "840px" },
  [theme.breakpoints.down("md")]: { width: "calc(100% - 32px)" },
  [theme.breakpoints.down("sm")]: { width: "calc(100% - 16px)" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
}));

function BaseGrid({ children, sx }: { children: ReactNode, sx?: CSSProperties }) {
  return (
    <Viewport>
      <Container>
        <Grid sx={sx} container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ lg: 4, md: 3, xs: 2, sm: 2 }}>
          {children}
        </Grid>
      </Container>
    </Viewport>
  )
}

export default BaseGrid;