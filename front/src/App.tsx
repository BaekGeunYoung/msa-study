import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartPage from "./page/StartPage";
import MainPage from "./page/MainPage";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path={"/"} component={StartPage} />
              <Route exact path={"/main"} component={MainPage} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
