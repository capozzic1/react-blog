
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const location = history.location;

const listen = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPostInfo: [],
      redirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /*
  get the className, compare it to all of the posts,
  find the post, send the post to the single view
  */
  handleClick(e) {
    // get the post id that was clicked on
    e.preventDefault();
    const postId = e.target.className;

    this.findPost(postId);
  }

  findPost(postId) {
    console.log(`${postId} test`);
    const posts = this.props.posts;
    const len = posts.length;
    for (let i = 0; i < len; i++) {
      if (posts[i]._id === postId) {
        this.setState({
          currentPostInfo: posts[i],
          redirect: true,
        });
      }
    }
  }

  render() {
    let postDivs;
    let posts;
    posts = this.props.posts;
    // console.log(posts);

    if (posts !== undefined) {
      postDivs = posts.map(post => (
        <div className="post-item" key={post._id}>
          <a href="" onClick={this.handleClick}><h2 className={post._id}>{post.title}</h2></a>
          <h3 className="post-date">{post.date}</h3>
          <h3 className="author">{post.author}</h3>
          <p className="body">{post.body}</p>
        </div>
      ));
    }

    if (this.state.redirect) {
      history.push('/single', { postInfo: this.state.currentPostInfo });
      history.go('/single');
    }

    return (
      <div className="post-container">
        {postDivs}
      </div>
    );
  }
}
