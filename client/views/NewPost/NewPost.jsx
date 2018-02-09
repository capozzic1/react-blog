import React from 'react';
import axios from 'axios';
import {Col} from 'react-bootstrap';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import Layout from '../../components/Layout/Layout';

import {newPost, fetchPosts} from '../../redux/actions/postActions';

const mapDispatchToProps = dispatch => ({
  handlePost: (arg1, arg2, arg3) => {
    dispatch(newPost(arg1, arg2, arg3));
  },
  fetchPosts: () => {
    dispatch(fetchPosts());
  }
});

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: 'testUser',
      body: '',
      submitted: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    if (name === 'title') {
      this.setState({title: event.target.value});
    }
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title === '' || this.state.body === '') {
      alert('Please make sure both fields are filled out');
    }
    const dateObj = new Date();
    const currentDate = dateObj.toString();

    this.props.handlePost(this.state.title, this.state.body, currentDate);

    this.setState({submitted: true});
  }
  /* eslint disable */
  render() {
    return (<Layout>
      <Col xs={12}>

        {this.state.submitted && <Redirect to="/dashboard"/>}

        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <h2 className="text-center">New Post</h2>
          <div>
            <label htmlFor="post-title">Post title</label><br/>
          </div>
          <div>
            <input name="title" type="text" placeholder="Post title" onChange={this.handleInput} className="input-form"/>
          </div>

          <div>
            <label htmlFor="post-body">Post body</label><br/>
            <textarea name="body" className="input-form" onChange={this.handleInput}/>
          </div>
          <div className="form-btns">
            <button type="submit" className="sub-button">Submit</button>
          </div>

        </form>

      </Col>
    </Layout>);
  }
}

export default connect(null, mapDispatchToProps)(NewPost);
