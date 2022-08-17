import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BaseGrid from "../BaseGrid";

const title = "A Rafisa";
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cum quia necessitatibus temporibus aspernatur reprehenderit magni architecto. Repudiandae sit minima repellendus atque quidem dolore, quo, facilis accusamus illum non velit?";

const Presentation = () => {
  return (
    <section>
      <Box sx={{ padding: "48px 0" }}>
        <BaseGrid>
          
          <Grid item md={12} sm={8} xs={4} justifyContent="center">
            <Typography variant="h2">
              {title}
            </Typography>
          </Grid>

          <Grid item md={8} sm={8} xs={4}>
            <Typography sx={{ padding: "16px" }} variant="body1" textAlign={{ md: "right", xs: "center"}}>
              {description}
            </Typography>
          </Grid>
          <Grid item md={4} sm={8} xs={4}>
            <Button variant="contained" color="secondary">
              Sobre a empresa
            </Button>
          </Grid>

        </BaseGrid>
      </Box>
    </section>
  )
}

export default Presentation;