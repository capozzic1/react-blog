import { Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home/Home';
// import PostList from './views/PostList/PostList';
import NewPost from './views/NewPost/NewPost';
import SinglePost from './views/SinglePost/SinglePost';
import Dashboard from './views/Dashboard/Dashboard';
import LoginPage from './views/LoginPage/LoginPage';

export default (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/newpost" component={NewPost} />
    <Route path="/single" component={SinglePost} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={LoginPage} />
  </div>

);
