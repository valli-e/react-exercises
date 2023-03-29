import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubUserList from './GithubUserList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={GithubUserList} />
      </Switch>
    </Router>
  );
}

export default App;
