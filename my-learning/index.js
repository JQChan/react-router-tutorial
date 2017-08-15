import React from 'react';
import { render } from 'react-dom';
import App from './modules/app';
import { Router, Route, hashHistory  } from 'react-router';

render(
  (<Router history={hashHistory}>
       <Route path="/" component={App} />
    </Router>
  ) , document.getElementById('app')
)