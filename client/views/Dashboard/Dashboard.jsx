import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout/Layout';
import {
  fetchPosts,
  deletePosts,
  findSinglePost,
  sendEdit,
  sendChanges,
  changeRedirect,
  checkBoxChange,
  handleSave,
} from '../../redux/actions/postActions';
import { dashLogged } from '../../redux/actions/signUpActions';
import createHistory from 'history/createBrowserHistory';
import EditModal from '../../components/EditModal/EditModal';
import DashButtons from '../../components/DashButtons/DashButtons';
import { Col } from 'react-bootstrap';
import SinglePost from '../SinglePost/SinglePost';
import './Dashboard.scss';

const history = createHistory();

const mapStateToProps = state => ({
  posts: state.posts.posts,
  redirect: state.posts.redirect,
  currPost: state.posts.currentPostInfo,
  edit: state.posts.edit,
  editPostId: state.posts.editPostId,
  checked: state.posts.boxChecked,
  redirect: state.posts.redirect,
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
  dashLogged: () => {
    dispatch(dashLogged());
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
    // this.props.dashLogged();
    this.fetchPosts();
  }

  handleClick(e) {
    // get the post id that was clicked on
    e.preventDefault();
    const postId = e.target.className;
    this.props.findSinglePost(postId);
    this.props.changeRedirect();
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

  conditionalRender() {
    const posts = this.props.posts;
    // console.log(posts);
    const rows = posts.map(post => (<tr key={post._id}>
      <td><input type="checkbox" onClick={this.handleChange} className={post._id} /></td>
      <td>
        <a href="" onClick={this.handleClick} className={post._id}>{post.title}</a>
      </td>
      <td>{post.author}</td>
      <td>{post.date}</td>
                                    </tr>));

    if (this.props.redirect) {
      return (<SinglePost currPost={this.props.currPost} changeRedirect={this.props.changeRedirect} />);
    } else if (this.props.edit) {
      return (<EditModal post={[...this.props.editPostId]} sendEdit={this.props.sendEdit} posts={this.props.posts} sendChanges={this.props.sendChanges} currPost={this.props.currPost} handleSave={this.props.handleSave} fetchPosts={this.props.fetchPosts} />);
    }

    return (<div className="dash-wrap">
      <DashButtons handleEdit={this.handleEdit} confirmDelete={this.confirmDelete} deleteAll={this.deleteAll} />
      <table className="dash-table">
        <tbody>
          <tr className="row-headers">
            <th>Check</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>

          </tr>

          {rows}
        </tbody>
      </table>
            </div>);
  }

  render() {
    return (<Layout>
      <Col xs={12}>
        <div className="dash-container">

          {this.props.posts.length >= 0 && this.conditionalRender()}
        </div>
      </Col>
            </Layout>);
  }
}

Dashboard.PropTypes = {
  posts: PropTypes.array.isRequired,
  redirect: PropTypes.bool.isRequired,
  currPost: PropTypes.array.isRequired,
  edit: PropTypes.bool.isRequired,
  editPostId: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  deletePosts: PropTypes.func.isRequired,
  findSinglePost: PropTypes.func.isRequired,
  sendEdit: PropTypes.func.isRequired,
  sendChanges: PropTypes.func.isRequired,
  changeRedirect: PropTypes.func.isRequired,
  checkBoxChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
