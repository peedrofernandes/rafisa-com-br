import { AppBar, Box, Button, Grid, IconButton, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "../../../CustomImage";
import BaseGrid from "../../../BaseGrid";
import React, { CSSProperties, useEffect, useState } from "react";
import { useScrollPosition } from "../../../../hooks";

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  background: "none",
}));

const pages = ["Sobre", "Produtos", "Contato"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [topScroll, setTopScroll] = useState<boolean>(true);
  const [desktopSx, setDesktopSx] = useState({});
  const [mobileSx, setMobileSx] = useState({});

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 0) {
      if (topScroll) {
        setTopScroll(false);
        console.log("topScroll is false!")
      }
    } else if (scrollPosition === 0) {
      if (!topScroll) {
        setTopScroll(true);
        console.log("topScroll is true!")
      }
    }
  }, [scrollPosition])

  useEffect(() => {
    if (topScroll) {
      setDesktopSx({
        display: { xs: "none", sm: "none", md: "block" },
        background: "none"
      });
      setMobileSx({
        display: { xs: "block", md: "none" },
        background: "none"
      })
    } else {
      setDesktopSx({
        display: { xs: "none", sm: "none", md: "block" },
        background: "#fff"
      });
      setMobileSx({
        display: { xs: "block", md: "none" },
        background: "#fff"
      })
    }
  }, [topScroll])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <HeaderContainer elevation={!topScroll ? 1 : 0}>
      <Box sx={desktopSx}>
        <BaseGrid>
          <Grid item md={8} lg={6} direction="row">
            <Icon src="assets/logos/logo-v3.svg" height="96px" sx={{ padding: "16px" }} />
          </Grid>
          <Grid item md={4} lg={6} sx={{justifyContent: "space-between"}}>
            {pages.map((page) => (
              <Button
                color={topScroll ? "secondary" : "primary"}
                key={page}
              >
                {page}
              </Button>
            ))}
          </Grid>
        </BaseGrid>
      </Box>

      <Box sx={mobileSx}>
        <BaseGrid>
          <Grid item sm={4} xs={2}>
            <Icon sx={{ padding: "10px" }} src="assets/logos/logo-v3.svg" height="48px" />
          </Grid>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              width: "100vw"
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}  
          >
            {pages.map((page) => (
              <MenuItem key={page} sx={{ width: "100vw" }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Grid item sm={4} xs={2} direction="row-reverse">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={
                topScroll ? {
                  color: "#ffffff"
                } : {
                  color: "#111414"
                }
              }
            >
              <MenuIcon />
            </IconButton>
          </Grid>

        </BaseGrid>
      </Box>
    </HeaderContainer>
  )
} 

export default Header;