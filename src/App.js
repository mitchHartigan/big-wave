import React from "react";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage/index";

export default function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/TidalWaveMixer">
            <></>
          </Route>

          <Route path="/CBS">
            <></>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
