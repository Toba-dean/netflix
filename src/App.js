import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages'

import { Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Switch>
  );
}
