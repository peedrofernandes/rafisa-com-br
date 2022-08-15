import { Box, Button, Grid, Paper, SxProps, Typography } from "@mui/material";
import BaseGrid from "../BaseGrid";

// Simple components

type ProductProps = {
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

const Icon = () => {
  return (
    <Typography sx={{ padding: "16px" }} variant="h2">Icon</Typography>
  )
}
const Title = ({ sx, text }: { sx?: SxProps; text: string }) => {
  return (
    <Typography sx={sx} variant="h3" textAlign="center">
      {text}
    </Typography>
  )
}
const Description = ({ text }: { text: string }) => {
  return (
    <Typography sx={{ padding: "16px" }} variant="body1" textAlign="center">
      {text}
    </Typography>
  )
}
const ProductButton = ({ text }: { text: string }) => {
  return (
    <Button variant="contained">
      {text}
    </Button>
  )
}

function Product(props: ProductProps) {
  const { title, description, buttonText, reverse } = props;

  return (
    <>
      <Box sx={{ display: {xs: "none", md: "block"}}}>
          {
            reverse === false ? (
              <Box sx={{padding: "64px 0"}}>
                <BaseGrid>
                  <Grid item md={6} direction="column">
                    <Paper sx={{ padding: "48px" }}>
                      <Title text={title} />
                      <Description text={description} />
                    </Paper>
                  </Grid>
                  <Grid item md={6} direction="column" justifyContent="space-evenly">
                    <Icon />
                    <ProductButton text={buttonText} />
                  </Grid>
                </BaseGrid>
              </Box>
            ) : (
              <BaseGrid>
                <Grid item md={6} direction="column" justifyContent="space-evenly">
                  <Icon />
                  <ProductButton text={buttonText} />
                </Grid>
                <Grid item md={6} direction="column">
                  <Paper sx={{ padding: "48px"}}>
                    <Title text={title} />
                    <Description text={description} />
                  </Paper>
                </Grid>
              </BaseGrid>
            )
          }
      </Box>

      <Box sx={{ display: { md: "none" } }}>
        <BaseGrid sx={{ padding: "48px 0" }}>
          
          <Grid item sm={8} xs={6} justifyContent="center">
            <Title text={title} />
          </Grid>
          <Grid item sm={8} xs={6} justifyContent="center">
            <Icon />
          </Grid>
          <Grid item sm={8} xs={6} direction="column" justifyContent="space-around">
            <Description text={description} />
            <ProductButton text={buttonText} />
          </Grid>

        </BaseGrid>
      </Box>
    </>
  )
}

export default Product;