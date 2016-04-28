import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'containers/App';
import Vote from 'containers/Vote';
import About from 'containers/About';
import LoginOrRegister from 'containers/LoginOrRegister';
import Dashboard from 'containers/Dashboard';
import TeamPage from 'containers/TeamPage';
import FeedPage from 'containers/FeedPage';
import UpcomingPage from 'containers/UpcomingPage';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };

  return (
    <Route path="/" component={App}>
      <IndexRedirect to="/feed" />
      <Route path="login" component={LoginOrRegister} onEnter={redirectAuth} />
      <Route path="team" component={TeamPage} onEnter={requireAuth} />
      <Route path="feed" component={FeedPage} onEnter={requireAuth} />
      <Route path="upcoming" component={UpcomingPage} onEnter={requireAuth} />
    </Route>
  );
};