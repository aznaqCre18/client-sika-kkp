import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LayoutContainer from './layout/LayoutContainer';
import Login from './pages/Login';
import PagePersist from './pages/PagePersistTodo';

import 'react-toastify/dist/ReactToastify.css';

// const PagePersist = React.lazy(() => import('./pages/PagePersistTodo'));
// const LayoutContainer = React.lazy(() => import('./layout/LayoutContainer'));
// const Login = React.lazy(() => import('./pages/Login'));


function App() {
  return (
    <BrowserRouter>
      {/* <React.Suspense>   */}
        <ToastContainer />
        <Switch>
          <Route exact path="/login" name="Login Page" render={ props => <Login {...props} /> } />
          <Route path="/" name="Home" render={ props => <LayoutContainer {...props} /> } />
          <Route exact path="/persist" render={props => <PagePersist {...props} />} />
        </Switch>
      {/* </React.Suspense> */}
    </BrowserRouter>
  )
};

export default App;
