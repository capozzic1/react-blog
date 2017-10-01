import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Home from '../views/Home/Home';
import NewPost from '../views/NewPost/NewPost';
import SinglePost from '../views/SinglePost/SinglePost';
import Dashboard from '../views/Dashboard/Dashboard';
import LoginPage from '../views/LoginPage/LoginPage';
import SignUp from '../views/SignUp/SignUp';

import PrivateRoute from './authroutes';
import createBrowserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory();

const mapStateToProps = state => ({
  loggedIn: state.signup.loggedIn,
});


const AllRoutes = ({ loggedIn }) => (
  <BrowserRouter history={history}>
    <div>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/newpost" component={NewPost} loggedIn={loggedIn} />
      <Route path="/single" component={SinglePost} />

      <PrivateRoute path="/dashboard" component={Dashboard} loggedIn={loggedIn} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUp} />
    </div>
  </BrowserRouter>
);


export default connect(mapStateToProps, null)(AllRoutes);
