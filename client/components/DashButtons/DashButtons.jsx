import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const DashButtons = props => (
// on click, goes to a form for create a new post
  <div className="dashBtns">
    <button className="edit btn" onClick={props.handleEdit}>Edit</button>
    <button className="delete btn" onClick={props.confirmDelete}>Delete</button>
    <button className="deleteAll btn" onClick={props.deleteAll}>Delete all posts</button>
    <button className="btn">
      <Link to="/newpost">New Post</Link>
    </button>
  </div>);

DashButtons.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
};

export default DashButtons;
