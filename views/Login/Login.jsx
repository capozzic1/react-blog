

import React from 'react';

export default class Login extends React.Component {
  goTo(route){
    this.props.history.replace(`/${route}`)
  }

  login(){
    this.props.auth.login();
  }

  logout(){
    this.props.auth.logout();
  }

  render(){
    const { isAuthenticated } = this.props.auth;
    console.log(this.props.auth);
    return (

      <div>
        <h2>{isAuthenticated() ? "yes" : "no"}</h2>
        {
          !isAuthenticated() && (
            <button onClick={this.login.bind(this)}>
              Log In
            </button>
          )

        }
        {
          isAuthenticated() && (
            <button onClick={this.logout.bind(this)}>
              Log Out
            </button>
          )
        }

      </div>
    );
  }
}
