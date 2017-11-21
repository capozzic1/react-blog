import { Grid, Col, Row } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { findSinglePost, changeRedirect } from '../../redux/actions/postActions';
import './PostList.scss';
import SinglePost from '../SinglePost/SinglePost';

const mapStateToProps = state => ({ redirect: state.posts.redirect, currPost: state.posts.currentPostInfo, signedUp: state.signup.signedUp });

const mapDispatchToProps = dispatch => ({
  findSinglePost: (postId) => {
    dispatch(findSinglePost(postId));
  },
  changeRedirect: (bool) => {
    dispatch(changeRedirect(bool));
  },
});

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

    const postDivs = posts.map(post => (<div className="post-item" key={post._id}>

      <div className="post-details">
        <a href="" onClick={this.handleClick}>
          <h2 className={post._id}>{post.title}</h2>
        </a>
        <h3 className="post-date">Date: {post.date}</h3>
        <h3 className="author">Posted by: {post.author}</h3>
      </div>
      <p className="body">{post.body}</p>

    </div>));

    const { redirect } = this.props;

    return (<div>

      {
        redirect
          ? (<SinglePost currPost={this.props.currPost} changeRedirect={this.props.changeRedirect} />)
          : <Col xs={10} xsOffset={1}>{postDivs}</Col>
      }

    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
