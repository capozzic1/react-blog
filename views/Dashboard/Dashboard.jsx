import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { fetchPosts, deletePosts, findSinglePost, sendEdit } from '../../redux/actions/postActions';
import createHistory from 'history/createBrowserHistory';
import EditModal from '../../components/EditModal/Editmodal';

const history = createHistory();

const location = history.location;

const listen = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

const mapStateToProps = state => ({
  postCon: state,
  redirect: state.posts.redirect,
  currPost: state.posts.currentPostInfo,
  edit: state.posts.edit,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
  deletePosts: (posts) => {
    dispatch(deletePosts(posts));
  },
  findSinglePost: (postId) => {
    dispatch(findSinglePost(postId));
  },
  sendEdit: (stat) => {
    dispatch(sendEdit(stat));
  },
});

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      // also handles posts to edit
      postsToDelete: [],

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }
  componentDidMount() {
    this.fetchPosts();
  }

  handleClick(e) {
    // get the post id that was clicked on
    e.preventDefault();
    const postId = e.target.className;
    this.props.findSinglePost(postId);
  }


  fetchPosts() {
    this.props.fetchPosts();
  }

  handleChange(e) {
    const postId = e.target.className;

    if (e.target.checked) {
      this.setState({
        postsToDelete: [...this.state.postsToDelete, postId],
      }, () => {
      });
    } else {
      const index = this.state.postsToDelete.indexOf(postId);
      this.setState(prevState => ({
        postsToDelete: prevState.postsToDelete.filter((_, i) => i !== index),
      }));
    }
  }
  handleEdit() {
    const len = this.state.postsToDelete.length;
    if (len > 1 || len === 0) {
      alert('Please check one post to edit');
    }

    this.props.sendEdit(true);


    console.log(this.state.postsToDelete.length);
  }

  confirmDelete() {
    const confirmDel = confirm('Are you sure you want to delete these posts?');

    confirmDel ? this.handleDelete() : false;
  }

  handleDelete() {
    this.props.deletePosts([...this.state.postsToDelete]);
  }

  deleteAll() {
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
  }

  render() {
    const { posts } = this.props.postCon.posts;
    // console.log(posts);
    const rows = posts.map(post =>
      (<tr key={post._id}>
        <td><input type="checkbox" onClick={this.handleChange} className={post._id} /></td>
        <td><a href="" onClick={this.handleClick} className={post._id}>{post.title}</a></td>
        <td>{post.author}</td>
        <td>{post.date}</td>
      </tr>));

    if (this.props.redirect === true) {
      history.push('/single', { info: this.props.currPost });
      history.go('/single');
    }


    return (
      <Layout>
        <button className="edit" onClick={this.handleEdit}>Edit</button>
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

        {
          this.props.edit === true && <EditModal />
        }
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
