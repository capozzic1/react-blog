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
import DashButtons from '../../components/DashButtons/DashButtons';
import Radium, { Style } from 'radium';

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

const styles = {
  dashContainer: {

    width: '45em',
    margin: '0 auto',
    position: 'relative',
    top: '3em',
  },
  btnTableWrap: {
    width: '50%',
    margin: '0 auto',
  },
  table: {
    margin: '0 auto',
    position: 'relative',
    top: '2em',
    width: '40em',
    textAlign: 'center',
    borderCollapse: 'collapse',
  },
  rowHeaders: {
    fontSize: '1.5em',
  },
  postRows: {
    fontSize: '20px',
  },
};
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
      (<tr key={post._id} style={styles.postRows}>
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
            <div className="dash-container" style={styles.dashContainer}>


              <DashButtons
                handleEdit={this.handleEdit}
                confirmDelete={this.confirmDelete}
                deleteAll={this.deleteAll}
              />
              <table style={styles.table}>
                <tbody>
                  <tr className="row-headers" style={styles.rowHeaders}>
                    <th>Check</th>
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

        <Style
          scopeSelector="table"
          rules={{
            'table, td, th': {
              border: '1px solid black' },
            'tr:nth-child(even)': {
              background: 'aliceblue',
            },
            '.row-headers': {
              background: 'deepskyblue',
            },
          }}
        />
      </Layout>
    );
  }
}
Dashboard = Radium(Dashboard);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
