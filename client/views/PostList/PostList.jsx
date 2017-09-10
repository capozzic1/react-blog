
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findSinglePost, changeRedirect } from '../../redux/actions/postActions';
import createHistory from 'history/createBrowserHistory';
import { Alert } from 'react-bootstrap';
import { closeAlert } from '../../redux/actions/signUpActions';
import Radium, { Style } from 'radium';

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

const styles = {
  postItem: {
    border: '1px solid black',
    paddingLeft: '10px',
    minHeight: '230px',
    marginTop: '15px',
  },
  postContainer: {
    position: 'relative',
    top: '22px',
  },
  postDetails: {
    position: 'relative',
    bottom: '15px',
  },
  postDate: {
    height: '7px',
  },
};

class PostList extends React.Component {
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
      <div className="post-item" key={post._id} style={styles.postItem}>
        <a href="" onClick={this.handleClick}><h2 className={post._id}>{post.title}</h2></a>
        <div className="post-details" style={styles.postDetails}>
          <h3 className="post-date" style={styles.postDate}>Date: {post.date}</h3>
          <h3 className="author" style={styles.postAuthor}>Posted by: {post.author}</h3>
        </div>
        <p className="body">{post.body}</p>
      </div>
    ));

    if (this.props.redirect === true) {
      history.push('/single', { info: this.props.currPost });
      history.go('/single');
    }

    return (
      <div className="post-container" style={styles.postContainer}>
        { signedUp &&
          (<Alert bsStyle="success" onDismiss={this.handleDismiss}>Success! You have successfully signed up. </Alert>)
        }
        {postDivs}
        <Style

          rules={{
            mediaQueries: {
              '(min-width: 550px)': {
                '.post-item': {
                  width: '40em',
                  margin: '0 auto',
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

PostList = Radium(PostList);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
