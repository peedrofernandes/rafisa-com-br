import { styled } from "@mui/material";

const Viewport = styled("div")(({ theme }) => ({
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

export default Viewport;