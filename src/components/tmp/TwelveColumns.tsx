import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import BaseGrid from "../BaseGrid";

function TwelveColumns() {
  const [visible, setVisible] = useState<boolean>(false);

  function toggleVisibility() {
    if (visible)
      setVisible(false);
    else
      setVisible(true);
  }

  return (
    <Box sx={{ position: "fixed", width: "100%", zIndex: "1501" }}>
      <Box>
        <Button onClick={toggleVisibility} sx={{ position: "fixed", bottom: "50%" }} variant="contained">
          (dev) 12 col
        </Button>
      </Box>
      {visible && (
      <BaseGrid>
        {[...Array(12)].map((el, key) => (
          <Grid item xs={1} key={key}>
            <Box sx={{
              backgroundColor: "rgba(255, 0, 0, 0.15)",
              width: "100%",
              height: "100vh",
            }}>
            </Box>
          </Grid>
        ))}
      </BaseGrid>
      )}
    </Box>
  )
}

export default TwelveColumns;
