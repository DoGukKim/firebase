import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from 'components/Layout/Nav/index';

import Index from 'pages/index';
import Auth from 'pages/auth';
import Profile from 'pages/profile';

type Props = {
  isLoggedIn?: any;
};

const AppRouter: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Nav />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Index} />
            <Route exact path="/profile" component={Profile} />
          </>
        ) : (
          <Route exact path="/" component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
