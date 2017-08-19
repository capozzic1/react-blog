import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { fetchPosts, deletePosts } from '../../redux/actions/postActions';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const location = history.location;

const listen = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

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
      postsToDelete: [],

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);


    this.deleteAll = this.deleteAll.bind(this);
  }
  componentDidMount() {
    this.fetchPosts();
  }


  fetchPosts() {
    this.props.fetchPosts();
  }

  handleChange(e) {
    const postHolder = [];
    const postId = e.target.className;

    if (e.target.checked) {
      this.setState({
        postsToDelete: [...this.state.postsToDelete, postId],
      }, () => {
        console.log(this.state);
      });
    } else {
      const index = this.state.postsToDelete.indexOf(postId);
      this.setState(prevState => ({
        postsToDelete: prevState.postsToDelete.filter((_, i) => i !== index),
      }));

      console.log(this.state);
    }
  }
  confirmDelete() {
    const confirmDel = confirm('Are you sure you want to delete these posts?');

    confirmDel ? this.handleDelete() : false;
  }
  handleDelete() {
    this.props.deletePosts([...this.state.postsToDelete]);
  }
  deleteAll() {
  //  this.props.deletePosts([...this.props.postCon.posts]);
    console.log(this.props.postCon.posts.posts);
    const posts = this.props.postCon.posts.posts;
    const postsDelete = [];

    posts.forEach((val, i) => {
      postsDelete.push(val._id);
    });

    this.setState({
      postsToDelete: postsDelete,
    }, () => {
      this.confirmDelete();
    });


    console.log(postsDelete);
  }

  render() {
    // console.log(this.state.posts);
    const { posts } = this.props.postCon.posts;
    // console.log(posts);
    const rows = posts.map(post =>
      (<tr key={post._id}>
        <td><input type="checkbox" onClick={this.handleChange} className={post._id} /></td>
        <td><a href="" onClick={this.handleClick} className={post._id}>{post.title}</a></td>
        <td>{post.author}</td>
        <td>{post.date}</td>
      </tr>));


    return (
      <Layout>
        <button className="edit">Edit</button>
        <button className="delete" onClick={this.confirmDelete}>Delete</button>
        <button className="deleteAll" onClick={this.deleteAll}>Delete all posts</button>
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
