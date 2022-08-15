import { styled } from "@mui/material";
import { ReactNode } from "react";

const BannerBackground = styled("div")(({ theme }) => ({
  background: "url(assets/banners/banner.jpg) #000",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "80vh",
  width: "100%",
}));

const BannerGradient = styled("div")(({ theme }) => ({
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6))",
  width: "100%",
  height: "100%",
}))

function Banner({ children }: { children: ReactNode }) {
  return (
    <BannerBackground>
      <BannerGradient>
        {children}
      </BannerGradient>
    </BannerBackground>
  )
}

export default Banner;