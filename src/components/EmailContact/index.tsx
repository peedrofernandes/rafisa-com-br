import { Box, Button, FormControl, Grid, Input, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import BaseGrid from "../BaseGrid";

// Dados do formulário:
// - Nome;
// - Email
// - Empresa;
// - Telefone;
// - 

const FormControlGrid = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Grid item md={3} sm={1} xs={0} />
      <Grid item md={6} sm={6} xs={4} justifyContent="center">
        {children}
      </Grid>
      <Grid item md={3} sm={1} xs={0} />
    </>
  )
}

const InputControl = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FormControlGrid>
        <FormControl fullWidth>

          {children}

        </FormControl>
      </FormControlGrid>
    </>
  )
}

const title = "Entre em contato!";

const EmailContact = () => {
  return (
    <Box sx={{ padding: "64px 0" }}>
      <BaseGrid>
        <Grid item md={12} sm={8} xs={4} justifyContent="center">
          <Typography variant="h4" sx={{ padding: "16px "}}>
            {title}
          </Typography> 
        </Grid>
      </BaseGrid>

      <form>
        <BaseGrid>

          <InputControl>
            <InputLabel htmlFor="nome">Nome</InputLabel>
            <Input id="nome" name="nome"/>
          </InputControl>

          <InputControl>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input id="email" name="email"/>
          </InputControl>

          <InputControl>
            <InputLabel htmlFor="empresa">Empresa</InputLabel>
            <Input id="empresa" name="empresa" />
          </InputControl>
      
          <InputControl>
            <InputLabel htmlFor="telefone">Telefone</InputLabel>
            <Input id="telefone" name="telefone"/>
          </InputControl>

          <FormControlGrid>
            <TextField fullWidth multiline minRows={2} label="Sua mensagem aqui">
              
            </TextField>
          </FormControlGrid>

          <FormControlGrid>
            <Button type="submit" variant="contained">Enviar</Button>
          </FormControlGrid>
        
        </BaseGrid>
      </form>

    </Box>
  )
}

export default EmailContact;