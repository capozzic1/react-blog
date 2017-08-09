import createHistory from 'history/createBrowserHistory';

class App extends React.Component{
  ...
  axis.post(/signup,{info})
    .then(function(){
   const history = createHistory();

    const listen = history.listen((location, action) => {
      console.log(action, location.pathname, location.state);
    });

      history.push('/RouteToRedirectTo', { some: stateifneeded });
      history.go('/RouteToRedirectTo');
  })
}

 <HashRouter>
   <Route exact path='/' component={Home}/>
   <Route path='/login' component={Login}/>
   ...
   </HashRouter >
