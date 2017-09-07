
import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';

import PostList from '../PostList/PostList';
import { fetchPosts } from '../../redux/actions/postActions';
import Radium, { Style } from 'radium';
/*
font-family: 'Merriweather', serif;
font-family: 'Open Sans', sans-serif;
*/


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
      <Layout >
        <PostList posts={posts} />
        <Style
          scopeSelector=".container"
          rules={{
            a: { textDecoration: 'none' },
            'a, h1, h2': { fontFamily: 'Merriweather, serif' },
            p: { fontFamily: 'Open Sans, sans-serif' },
          }}
        />;
      </Layout>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
