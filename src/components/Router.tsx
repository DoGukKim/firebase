import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Index from 'pages/index';
import Auth from 'pages/auth';

const AppRouter = () => {
  const [isLoggedIn, setLoggedIn] = useState<Boolean>(true);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Index} />
          </>
        ) : (
          <Route path="/auth" component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
