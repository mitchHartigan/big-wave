import React from "react";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Homepage from "./pages/Homepage/index";

export default function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Homepage />
    </ThemeProvider>
  );
}
