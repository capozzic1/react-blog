
import React from 'react';
import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { load as loadData } from '../../redux/actions/postActions';
import reducer from '../../redux/reducers/postsReducer';

const mapStateToProps = state =>
  // ...some irrelevant logic
  ({
    formValues: getFormValues('editForm')(state),
  });

class EditModal extends React.Component {
  handleCancel() {
    this.props.sendEdit(false);
  }

  handleSave() {
    const { title, body } = this.props.formValues;

    // this.props.handleSave();
    const newObj = { ...this.props.currPost, title, body };

    this.props.handleSave([newObj]);
  }


  render() {
    const { handleSubmit } = this.props;
    return (

      <section className="form-wrapper" id="edit-form">
        <h2>Edit Post</h2>
        <form >

          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Post title"

          />
          <div className="text-wrapper">

            <Field
              name="body"
              component="textarea"
              className="text-area"

            />
          </div>
          <button type="submit" onSubmit={this.props.handleSubmit(this.handleSave.bind(this))}>Save</button>
          <button type="button" onClick={this.handleCancel.bind(this)}>Cancel</button>
        </form>
      </section>

    );
  }
}

EditModal = reduxForm({
  form: 'editForm',
})(EditModal);


EditModal = connect(
  state => ({
    initialValues: state.posts.currentPostInfo,
  }),

  { reducer },
)(EditModal);

const selector = formValueSelector('editForm');

EditModal = connect(
  state => ({
    formValues: getFormValues('editForm')(state),
  }),
)(EditModal);


export default EditModal;
