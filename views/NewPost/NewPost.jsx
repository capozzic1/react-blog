import React from 'react';
import Layout from '../../components/Layout/Layout';
import Post from '../../models/models';

const NewPost = () => (
  <Layout>
    <section className="form-wrapper" id="post-form">
      <h2>New Post</h2>
      <form>
        <label htmlFor="post-title">Post title</label><br />
        <input type="text" placeholder="Post title" required />
        <div className="text-wrapper">
          <textarea className="text-area" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  </Layout>
);

export default NewPost;
