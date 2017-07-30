import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';


export default class NewPost extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      author: 'capozzic',
      body: '',
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

    this.handlePost(this.state.title, this.state.body);
  }

  handlePost(title, body) {
    axios.post('http://localhost:4000/newpost', {
      title,
      body,
      author: this.state.author,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Layout>
        <section className="form-wrapper" id="post-form">
          <h2>New Post</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="post-title">Post title</label><br />
            <input
              name="title"
              type="text"
              placeholder="Post title"
              onChange={this.handleInput}
            />
            <div className="text-wrapper">
              <textarea name="body" className="text-area" onChange={this.handleInput} />
            </div>
            <button type="submit" >Submit</button>
          </form>
        </section>
      </Layout>
    );
  }
}
