import React, { Component } from "react";
import store, { history } from "./store";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import Blog from "./components/pages/Blog.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
