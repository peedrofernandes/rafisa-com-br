import { Box, Button, ButtonGroup, Grid, styled, Typography } from "@mui/material";
import BaseGrid from "../../../BaseGrid";

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: "48px 0",
  backgroundColor: "#111414",
  color: "#ffffff"
}));

const Info = () => {
  const data = [
    "Rafisa - Comércio de Sacarias LTDA",
    "CNPJ: xx.xxx.xxx/xxxx-xx",
    "Rua São Paulo, 4351 - Petrópolis, Joinville, Santa Catarina, Brasil",
    "CEP: xxxxx-xxx",
    "Horário de funcionamento: Segunda-feira à Sexta-feira, das 8:00 às 18:00"
  ];

  return (
    <Grid item xs={4} sm={8} md={6} direction="column" alignItems="start">
      {data.map((elem, key) => (
        <Typography key={key} variant={key === 0 ? "body1" : "body2"} marginBottom={1}>
          {elem}
        </Typography>
      ))}
    </Grid>
  )
}

const Nav = () => {
  const data = ["Início", "Sobre", "Produtos", "Contato"];

  return (
    <Grid item xs={4} sm={8} md={6} direction="column" justifyContent="space-around">
      <Typography variant="body2">Navegação</Typography>
      <ButtonGroup variant="text" color="secondary">
        {data.map((item, key) => (  
          <Button color="secondary">{item}</Button> 
        ))}
      </ButtonGroup>
    </Grid>
  )
}

const Footer = () => {
  return (
    <FooterContainer>
      <BaseGrid>
        <Info />
        <Nav />
      </BaseGrid>
    </FooterContainer>
  )
}

export default Footer;