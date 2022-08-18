import { Typography } from "@mui/material";
import React from "react";
import BaseGrid from "../components/BaseGrid";
import Layout from "../components/Layout";

const Sobre = () => {
  return (
    <Layout headerAnimated={false}>
      <BaseGrid>
        <Typography variant="h1">Sobre a rafisa</Typography>
      </BaseGrid>
    </Layout>
  )
}

export default Sobre;