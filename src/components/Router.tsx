import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Index from 'pages/index';
import Auth from 'pages/auth';

type Props = {
  isLoggedIn?: any;
};

const AppRouter: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Index} />
          </>
        ) : (
          <Route exact path="/" component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
