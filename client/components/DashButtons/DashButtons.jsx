import React from 'react';
import { Link } from 'react-router-dom';
import './dashbtns.scss';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const DashButtons = props => (
// on click, goes to a form for create a new post
  <Row>
    <Col xs={12}>
      <div className="dashBtns">
        <button className="edit btn" onClick={props.handleEdit}>Edit</button>
        <button className="delete btn" onClick={props.confirmDelete}>Delete</button>
        <button className="deleteAll btn" onClick={props.deleteAll}>Delete all posts</button>
        <button className="btn new-post">
          <Link to="/newpost">New Post</Link>
        </button>
      </div>
    </Col>
  </Row>);

DashButtons.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
};

export default DashButtons;
