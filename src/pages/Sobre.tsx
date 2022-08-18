import { Box, Card, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import BaseGrid from "../components/BaseGrid";
import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";
import Location from "../components/Location";
import EmailContact from "../components/EmailContact";

const VitraBanner = styled(Box)(({ theme }) => ({
  background: "url(assets/banners/vitrabanner.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%"
}));

const Gradient = styled(Box)(({ theme }) => ({
  background: "linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))",
  width: "100%",
  height: "100%"
}))

const Sobre = () => {
  return (
    <Layout headerAnimated={false}>

      <Box sx={{ padding: "64px 0"}}>
        <BaseGrid>
          <Grid item xs={4} sm={8} md={6} justifyContent="center">
            <Typography variant="h2">Sobre a rafisa</Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={6} sx={{ height: "256px" }}>
            <Paper sx={{ width: "100%", height: "100%" }}>
              <VitraBanner>
                <Gradient />
              </VitraBanner>
            </Paper>
          </Grid>
        </BaseGrid>
      </Box>
      
      <Box sx={{ padding: "32px 0"}}>
        <BaseGrid>
          <Grid item xs={4} sm={8} md={6} direction="column" alignItems="start">
            <Paper sx={{ padding: "48px"}}>
              <Typography variant="h4">
                Title 1
              </Typography>
              <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, aperiam dolor expedita ullam odio praesentium eligendi facilis minima provident eos perspiciatis architecto numquam maiores non sit similique adipisci at fugiat.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} sm={8} md={6} direction="column" alignItems="start">
            <Paper sx={{ padding: "48px"}}>
              <Typography variant="h4">
                Title 2
              </Typography>
              <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, aperiam dolor expedita ullam odio praesentium eligendi facilis minima provident eos perspiciatis architecto numquam maiores non sit similique adipisci at fugiat.</Typography>
            </Paper>
          </Grid>
        </BaseGrid>
      </Box>
      
      <Box>
        <EmailContact />
      </Box>

      <Box>
        <Location />
      </Box>


      
    </Layout>
  )
}

export default Sobre;