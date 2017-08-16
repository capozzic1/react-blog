import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { fetchPosts, deletePosts } from '../../redux/actions/postActions';

const mapStateToProps = state => ({
  postCon: state,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
  deletePosts: (posts) => {
    dispatch(deletePosts(posts));
  },
});

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.props.fetchPosts();
  }

  handleChange(e) {
    const postHolder = [];
    let postId;
    postId = e.target.className;

    if (e.target.checked) {
      this.setState({
        posts: [...this.state.posts, postId],
      }, () => {
        console.log(this.state);
      });
    } else {
      const index = this.state.posts.indexOf(postId);
      this.setState(prevState => ({
        posts: prevState.posts.filter((_, i) => i !== index),
      }));

      console.log(this.state);
    }
  }
  confirmDelete() {
    const confirmDel = confirm('Are you sure you want to delete these posts?');

    confirmDel ? this.handleDelete() : false;
  }
  handleDelete() {
    this.props.deletePosts([...this.state.posts]);
  }

  render() {
    // console.log(this.state.posts);
    const { posts } = this.props.postCon.posts;

    const rows = posts.map(post =>
      (<tr key={post._id}>
        <td><input type="checkbox" onClick={this.handleChange} className={post._id} /></td>
        <td>{post.title}</td>
        <td>{post.author}</td>
        <td>{post.date}</td>
      </tr>));

    // console.log(posts);
    return (
      <Layout>
        <button className="edit">Edit</button>
        <button className="delete" onClick={this.confirmDelete}>Delete</button>
        <table>
          <tr>
            <th><input type="checkbox" /></th>
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
