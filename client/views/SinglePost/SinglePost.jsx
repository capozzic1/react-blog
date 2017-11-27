import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Row, Col } from 'react-bootstrap';
import './singlePost.scss';
/* eslint-disable */

class SinglePost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const post = this.props.currPost;
    return (<Col xs={10} xsOffset={1}>
      <div className="single-post-item">
        <div className="post-details">
          <div className="title-date">
            <h2 className="post-title">{post.title}</h2>
            <h3 className="post-date">Date: {post.date}</h3>
          </div>
          <div className="author">
            <h3 className="post-author">Posted by: {post.author}</h3>
          </div>
          <div className="body">
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      </div>
    </Col>);
  }
};

export default SinglePost;
