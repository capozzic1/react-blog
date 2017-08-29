
import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';

import PostList from '../PostList/PostList';
import { fetchPosts } from '../../redux/actions/postActions';


const mapStateToProps = state => ({
  postCon: state,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
});

class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.props.fetchPosts();
  }


  render() {
    // console.log(this.props.postCon.posts.posts);
    const { posts } = this.props.postCon.posts;

    console.log(posts);
    return (
      <Layout>

        <PostList posts={posts} />
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);