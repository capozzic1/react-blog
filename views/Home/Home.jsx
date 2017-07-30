
import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import PostBtn from '../../components/PostBtn/PostBtn';
import PostList from '../PostList/PostList';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/posts')
      .then((response) => {
        // console.log(res);

        this.setState({
          posts: response.data,
        });
      });
  }


  render() {
    return (
      <Layout>
        <PostBtn />
        <PostList posts={this.state.posts} />
      </Layout>
    );
  }
}
