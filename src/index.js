import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security }from '@okta/okta-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Config = {
  issuer: "https://dev-867909.okta.com/oauth2/default",
  redirect_uri: "http://localhost:3000/implicit/callback",
  client_id: "0oa2iiuopFv75xCrA4x6",
  pkce: true
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...Config}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) module.hot.accept();