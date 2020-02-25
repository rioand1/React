import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import PostsManager from './pages/PostsManager';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer="https://dev-867909.okta.com/oauth2/default"
                  clientId="0oa2iiuopFv75xCrA4x6"
                  redirectUri="http://localhost:3000/implicit/callback"
                  onAuthRequired={onAuthRequired}
                  pkce={true} >
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path="/posts" component={PostsManager} />
          <Route path='/login' render={() => <Login baseUrl="https://dev-867909.okta.com" />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;