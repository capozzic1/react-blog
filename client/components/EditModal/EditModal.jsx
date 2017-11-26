import React from 'react';
import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { load as loadData } from '../../redux/actions/postActions';
import reducer from '../../redux/reducers/postsReducer';
import createHistory from 'history/createBrowserHistory';
import { Col } from 'react-bootstrap';

const history = createHistory();

const mapStateToProps = state => ({
  formValues: getFormValues('editForm')(state),
});

class EditModal extends React.Component {
  handleCancel() {
    this.props.sendEdit(false);
  }

  handleSave() {
    const { title, body } = this.props.formValues;
    const newObj = {
      ...this.props.currPost,
      title,
      body,
    };

    this.props.handleSave([newObj]);

    this.props.sendEdit(false);

    this.props.fetchPosts();
  }

  render() {
    return (<Col xs={12}>
      <h2>Edit Post</h2>
      <form className="edit-form">
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <div>

          <Field name="title" component="input" type="text" placeholder="Post title" className="input-form" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
        </div>
        <div>

          <Field name="body" component="textarea" className="input-form" />
        </div>
        <div className="form-btns">
          <button type="button" onClick={this.handleSave.bind(this)}>Save</button>
          <button type="button" onClick={this.handleCancel.bind(this)}>Cancel</button>
        </div>
      </form>
    </Col>);
  }
}

EditModal = reduxForm({ form: 'editForm' })(EditModal);

EditModal = connect(state => ({ initialValues: state.posts.currentPostInfo }), { reducer })(EditModal);

const selector = formValueSelector('editForm');

EditModal = connect(state => ({
  formValues: getFormValues('editForm')(state),
}))(EditModal);

export default EditModal;
