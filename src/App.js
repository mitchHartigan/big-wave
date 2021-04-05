import React from "react";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Homepage />
    </ThemeProvider>
  );
}

const globalStyles = {
  fontFamily: "",
  fontSizeLg: "",
  fontSizeMd: "",
  fontSizeSm: "",
  colors: {
    mainBlue: "#007fff",
    darkBlue: "#17224d",
    brightBlue: "#17e9e1",
    paleBlue: "#f5fafa",
  },
};
