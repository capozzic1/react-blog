import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Home from './views/Home/Home.js';
import PostList from './views/PostList/PostList.js';

const Redirect2 = () => {
 window.location = 'https://lucidwebblog.auth0.com/login?client=aNNJJ3d1siwKE-8cp2p8o8ylKDlT6boI';
}


class App extends React.Component {
  render(){
    return (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/postList' component={PostList} />

      <Route path='/login'  component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'} />
    </Switch>
  </BrowserRouter>
      );
    }

    }
    ReactDOM.render(
      <App/>
    , document.getElementById('root'));
