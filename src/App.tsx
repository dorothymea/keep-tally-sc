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

function App() {
  return (
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
  );
}


export default App;
