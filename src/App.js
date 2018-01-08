import React, { Component } from "react";
import store, { history } from "./store";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import Blog from "./components/pages/Blog.jsx";
import AboutMe from "./components/pages/AboutMe.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/blog" />
            </Route>
            <Route path="/blog" component={Blog} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
