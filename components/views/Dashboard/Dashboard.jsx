import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { fetchPosts, deletePosts,
  findSinglePost,
  sendEdit,
  sendChanges,
  changeRedirect,
  checkBoxChange,
  handleSave } from '../../redux/actions/postActions';
import createHistory from 'history/createBrowserHistory';
import EditModal from '../../components/EditModal/EditModal';
import PostBtn from '../../components/PostBtn/PostBtn';


const history = createHistory();


const mapStateToProps = state => ({
  posts: state.posts.posts,
  redirect: state.posts.redirect,
  currPost: state.posts.currentPostInfo,
  edit: state.posts.edit,
  editPostId: state.posts.editPostId,
  checked: state.posts.boxChecked,
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
  sendChanges: (changes) => {
    dispatch(sendChanges(changes));
  },
  changeRedirect: () => {
    dispatch(changeRedirect());
  },
  checkBoxChange: (postId) => {
    dispatch(checkBoxChange(postId));
  },
  handleSave: (currPost) => {
    dispatch(handleSave(currPost));
  },
});

class Dashboard extends React.Component {
  constructor() {
    super();


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
    this.props.changeRedirect();
    this.props.findSinglePost(postId);
  }


  fetchPosts() {
    this.props.fetchPosts();
  }

  handleChange(e) {
    const postId = e.target.className;

    if (e.target.checked) {
      this.props.checkBoxChange(postId);
    } else {
      this.props.checkBoxChange();
    }
  }

  handleEdit() {
    // send edit to get the edit modal displayed
    if (!this.props.checked) {
      alert('Please check a box to edit a post.');
    } else {
      this.props.findSinglePost(this.props.editPostId);
      this.props.sendEdit(true);
    }
  }

  confirmDelete(count) {
    const confirmDel = confirm('Are you sure you want to delete these posts?');
    if (confirmDel === true && count == 'all') {
      this.handleDelete([...this.props.posts]);
    } else if (confirmDel) {
      this.handleDelete([this.props.editPostId]);
    }
  }

  handleDelete(posts) {
    this.props.deletePosts([...posts]);
  }


  deleteAll() {
    this.confirmDelete('all');
  }

  render() {
    const posts = this.props.posts;
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

        {
          this.props.edit ? (
            <EditModal
              post={[...this.props.editPostId]}
              sendEdit={this.props.sendEdit}
              posts={this.props.posts}
              sendChanges={this.props.sendChanges}
              currPost={this.props.currPost}
              handleSave={this.props.handleSave}
            />
          ) : (
            <div>
              <button className="edit" onClick={this.handleEdit}>Edit</button>
              <button className="delete" onClick={this.confirmDelete}>Delete</button>
              <button className="deleteAll" onClick={this.deleteAll}>Delete all posts</button>
              <PostBtn />
              <table>
                <tbody>
                  <tr>

                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>

                  </tr>

                  {rows}
                </tbody>
              </table>
            </div>
          )
        }
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
