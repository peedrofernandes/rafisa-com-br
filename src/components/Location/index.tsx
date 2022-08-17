import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import BaseGrid from "../BaseGrid";

const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.409300275184!2d-48.84425718528232!3d-26.345620476135128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1a7aa112f43%3A0xe2eec0258506539!2sRafisa%20Com%C3%A9rcio%20de%20Sacarias!5e0!3m2!1spt-BR!2sbr!4v1660601177112!5m2!1spt-BR!2sbr";

const Location = () => {
  return (
    <Box sx={{ padding: "64px 0" }}>
      <BaseGrid>
        <Grid item md={2} sm={1} xs={0} />
        <Grid item md={8} sm={6} xs={4} justifyContent="center">
          <Paper sx={{ width: "100%" }}>
            <iframe width="100%" height="256px" src={iframeSrc} style={{ border: "0" }} loading="lazy" />
          </Paper>
        </Grid>
        <Grid item md={2} sm={1} xs={0} />
      </BaseGrid>
    </Box>
  )
}

export default Location;