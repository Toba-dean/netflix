import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages'

import { Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

import { useAuthListener } from './hooks/useAuthListener';


export default function App() {

  const { user } = useAuthListener();

  return (
    <Switch>
      <IsUserRedirect 
        exact 
        path={ROUTES.HOME}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Home />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        path={ROUTES.SIGN_UP}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute
        path={ROUTES.BROWSE}
        user={user}
        exact
      >
        <Browse />
      </ProtectedRoute>
    </Switch>
  );
}
