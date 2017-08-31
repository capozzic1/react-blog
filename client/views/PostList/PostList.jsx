
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findSinglePost, changeRedirect } from '../../redux/actions/postActions';
import createHistory from 'history/createBrowserHistory';
import { Alert } from 'react-bootstrap';
import { closeAlert } from '../../redux/actions/signUpActions';

const history = createHistory();

const mapStateToProps = state => ({
  redirect: state.posts.redirect,
  currPost: state.posts.currentPostInfo,
  signedUp: state.signup.signedUp,
});

const mapDispatchToProps = dispatch => ({
  findSinglePost: (postId) => {
    dispatch(findSinglePost(postId));
  },
  closeAlert: () => {
    dispatch(closeAlert());
  },
  changeRedirect: () => {
    dispatch(changeRedirect());
  },
});

export class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  /*
  get the className, compare it to all of the posts,
  find the post, send the post to the single view
  */
  handleClick(e) {
    // get the post id that was clicked on
    e.preventDefault();
    const postId = e.target.className;
    this.props.changeRedirect();
    this.props.findSinglePost(postId);
  }

  handleDismiss() {
    this.props.closeAlert();
  }


  render() {
    const posts = this.props.posts;
    const signedUp = this.props.signedUp;
    console.log(this.props.redirect);

    const postDivs = posts.map(post => (
      <div className="post-item" key={post._id}>
        <a href="" onClick={this.handleClick}><h2 className={post._id}>{post.title}</h2></a>
        <h3 className="post-date">{post.date}</h3>
        <h3 className="author">{post.author}</h3>
        <p className="body">{post.body}</p>
      </div>
    ));

    if (this.props.redirect === true) {
      history.push('/single', { info: this.props.currPost });
      history.go('/single');
    }

    return (
      <div className="post-container">
        { signedUp &&
          (<Alert bsStyle="success" onDismiss={this.handleDismiss}>Success! You have successfully signed up. </Alert>)
        }
        {postDivs}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
