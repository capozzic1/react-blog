import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Home from './views/Home/Home.js';
import PostList from './views/PostList/PostList.js';



class App extends React.Component {
  render(){
    return (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/postList' component={PostList} />
    </Switch>
  </BrowserRouter>
      );
    }

    }
    ReactDOM.render(
      <App/>
    , document.getElementById('root'));
