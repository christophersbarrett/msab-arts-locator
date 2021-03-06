import '@babel/polyfill';
import App from 'cerebral';
import { Container } from '@cerebral/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './views/Main';
import { presenter } from './presenter/presenter';
import Devtools from 'cerebral/devtools';
import { route, router } from './router';

presenter.providers.router = {
  route,
};
const cerebralApp = App(presenter, {
  devtools: Devtools({
    host: 'localhost:8585',
  }),
});
router.initialize(cerebralApp);
ReactDOM.render(
  <Container app={cerebralApp}>
    <Main />
  </Container>,
  document.querySelector('#app'),
);
