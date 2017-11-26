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
    return (<Col xs={12}>
      <div className="single-wrap">
        <div className="single-post">
          <div className="titleAuthor">
            <h2 className="post-title">{post.title}</h2>
            <h3 className="post-author">Posted by: {post.author}</h3>
          </div>
          <div className="postDate">
            <h3 className="post-date">Date: {post.date}</h3>
          </div>
          <p className="post-body">{post.body}</p>

        </div>
      </div>
    </Col>);
  }
};

export default SinglePost;
