import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartPage from "./page/StartPage";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path={"/"} component={StartPage} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
