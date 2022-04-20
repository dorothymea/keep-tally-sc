import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route, Redirect,
} from "react-router-dom";
import Statistic from "./views/statistic";
import Tally from "./views/tally";
import Tags from "./views/tags";
import NoMatch from "./views/noMatch";
import {TagEdit} from "./views/TagEdit";
import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;

function App() {
  return (
      <AppWrapper>
          <Router>
              <Switch>
                  <Route path="/statistic">
                      <Statistic />
                  </Route>
                  <Route path="/tally">
                      <Tally/>
                  </Route>
                  <Route path="/tags/:id" exact={true}>
                      <TagEdit />
                  </Route>
                  <Route path="/tags" exact={true}>
                      <Tags />
                  </Route>
                  <Redirect exact from="/" to="/tally" />
                  <Route path="*">
                      <NoMatch />
                  </Route>
              </Switch>
          </Router>
      </AppWrapper>

  );
}


export default App;
