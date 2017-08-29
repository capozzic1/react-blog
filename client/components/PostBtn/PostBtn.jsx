import React from 'react';
import { Link } from 'react-router-dom';

const PostBtn = () => (
  // on click, goes to a form for create a new post
  <button><Link to="/newpost">New Post</Link></button>
);

export default PostBtn;
