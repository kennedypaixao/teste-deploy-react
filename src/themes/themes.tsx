import React from "react";
import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[0];

const primary = '#2567B4';

const theme = {
  fontSizes,
  colors: {
    primary
  }
}

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}