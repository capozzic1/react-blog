import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { newPost, fetchPosts } from '../../redux/actions/postActions';

const mapDispatchToProps = dispatch => ({
  handlePost: (arg1, arg2, arg3) => {
    dispatch(newPost(arg1, arg2, arg3));
  },
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
});

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: 'testUser',
      body: '',
      submitted: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    if (name === 'title') {
      this.setState({ title: event.target.value });
    }
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title === '' || this.state.body === '') {
      alert('Please make sure both fields are filled out');
    }
    const dateObj = new Date();
    const currentDate = dateObj.toString();

    this.props.handlePost(this.state.title, this.state.body, currentDate);

    this.setState({ submitted: true });
  }

  render() {
    return (<Layout>
      {this.state.submitted && <Redirect push="push" to="/dashboard" />}
      <section className="form-wrapper" id="post-form">

        <form className="new-post" onSubmit={this.handleSubmit}>
          <h2>New Post</h2>
          <label htmlFor="post-title">Post title</label><br />
          <input name="title" type="text" placeholder="Post title" onChange={this.handleInput} />
          <div className="text-wrapper">
            <label htmlFor="post-body">Post body</label><br />
            <textarea name="body" className="text-area" onChange={this.handleInput} />
          </div>
          <button type="submit" className="sub-button">Submit</button>
        </form>
      </section>

    </Layout>);
  }
}

export default connect(null, mapDispatchToProps)(NewPost);
