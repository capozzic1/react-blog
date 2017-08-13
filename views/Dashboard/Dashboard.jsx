import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import fetchPosts from '../../redux/actions/postActions';

const mapStateToProps = state => ({
  postCon: state,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
});

class Dashboard extends React.Component {
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
    const { posts } = this.props.postCon.posts;

    const rows = posts.map(post =>
      (<tr key={post._id}>
        <td><input type="checkbox" /></td>
        <td>{post.title}</td>
        <td>{post.author}</td>
        <td>{post.date}</td>
      </tr>));

    console.log(rows);
    // console.log(posts);
    return (
      <Layout>
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
          {rows}
        </table>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
