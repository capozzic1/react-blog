import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Row } from 'react-bootstrap';
import PostList from '../PostList/PostList';
import { fetchPosts } from '../../redux/actions/postActions';

/* font-family: 'Merriweather', serif;
font-family: 'Open Sans', sans-serif; */

const mapStateToProps = state => ({ postCon: state });

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
    return (<Layout >
      <Row>
        <PostList posts={posts} />
      </Row>
    </Layout>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
