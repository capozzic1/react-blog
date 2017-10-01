
import React from 'react';
import Navigation from '../Navigation/Navigation';
import Radium, { Style } from 'radium';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/signUpActions';

const mapStateToProps = state => ({
  loggedIn: state.signup.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

const styles = {
  container: {
    background: 'black',
    backgroundImage: 'url(images/northern.jpg)',
    backgroundRepeat: 'no-repeat',
  },
};
class Layout extends React.Component {
  render() {
    // console.log(this.props.posts);
    return (

      <div className="container" style={styles.container}>
        <Navigation loggedIn={this.props.loggedIn} logout={this.props.logout} />
        {this.props.children}
        <Style
          scopeSelector=".container"
          rules={{
            a: { textDecoration: 'none' },
            'a, h1, h2, th, label': { fontFamily: 'Merriweather, serif' },
            'p, td, button': { fontFamily: 'Open Sans, sans-serif' },
            p: {
              width: '70%',
              margin: '0 auto',
              textAlign: 'left',
            },

          }}
        />
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
