import React from "react";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage/index";
import { ChloramineBoostingSystem } from "pages/Chloramine Boosting System";
import { TidalWaveMixer } from "./pages/Tidal Wave Mixer/index";

export default function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/tidalwavemixer">
            <TidalWaveMixer />
          </Route>

          <Route path="/chloramineboostingsystem">
            <ChloramineBoostingSystem />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
