import { connect } from 'react-redux';
import { sendEdit } from '../../redux/actions/postActions';
import React from 'react';
import Layout from '../Layout/Layout';


const mapDispatchToProps = dispatch => ({
  sendEdit: (stat) => {
    dispatch(sendEdit(stat));
  },
});

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    if (name === 'title') {
      this.setState({ title: event.target.value });
    }
    this.setState({ body: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  handleCancel(e) {
    e.preventDefault();
    this.props.sendEdit(false);
  }

  render() {
    return (

      <section className="form-wrapper" id="edit-form">
        <h2>Edit Post</h2>
        <form>
          <label htmlFor="post-title">Post title</label><br />
          <input
            name="title"
            type="text"
            placeholder="Post title"
            onChange={this.handleInput}
          />
          <div className="text-wrapper">
            <textarea name="body" className="text-area" onChange={this.handleInput} />
          </div>
          <button onSubmit={this.handleSubmit}>Edit</button>
          <button onSubmit={this.handleCancel}>Cancel</button>
        </form>
      </section>

    );
  }
}

export default connect(mapDispatchToProps)(EditModal);
