import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: { width: "1040px" },
  [theme.breakpoints.down("xl")]: { width: "calc(100% - 200px)" },
  [theme.breakpoints.down("lg")]: { width: "840px" },
  [theme.breakpoints.down("md")]: { width: "calc(100% - 32px)" },
  [theme.breakpoints.down("sm")]: { width: "calc(100% - 16px)" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

export default Container;