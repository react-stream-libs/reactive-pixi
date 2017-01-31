import * as React from 'react';
import { History } from 'react-router';
import { Router } from 'react-router';
import routes from './Routes';
export type PropsType = {
  history: History.History,
};
const App: React.SFC<PropsType> = ({ history }) => {
  return (
    <Router history={history}>
      {routes}
    </Router>
  )
}

export default App;