
import React from 'react';
import Layout from '../../components/Layout/Layout';

const SinglePost = (props) => {
  console.log(props.location.state.postInfo);
  const post = props.location.state.postInfo;

  return (
    <Layout>
      <h2 className="post-title">{post.title}</h2>
      <h3 className="post-author">{post.author}</h3>
      <h3 className="post-time">{post.date}</h3>
      <p className="post-body">{post.body}</p>
    </Layout>
  );
};

export default SinglePost;
