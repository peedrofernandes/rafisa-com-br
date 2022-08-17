import { Container, Grid, styled } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
