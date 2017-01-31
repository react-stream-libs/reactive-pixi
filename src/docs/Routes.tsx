import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import PageRoot from './PageRoot';
import IndexPage from './pages/IndexPage';
import StageDemoPage from './pages/StageDemoPage';

export default (
  <Route path="/" component={PageRoot}>
    <IndexRoute component={IndexPage} />
    <Route path="/stage-demo" component={StageDemoPage} />
  </Route>
);