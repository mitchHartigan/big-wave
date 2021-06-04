import React from "react";
import { globalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage/index";
import { ChloramineBoostingSystem } from "pages/Chloramine Boosting System";
import { TidalWaveMixer } from "./pages/Tidal Wave Mixer/index";
import { CaseStudies } from "pages/Case Studies";
import { Pomona } from "./pages/Pomona/index";

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

          {/* <Route path="/casestudies">
            <CaseStudies />
          </Route> */}

          <Route path="/pomona">
            <Pomona />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
