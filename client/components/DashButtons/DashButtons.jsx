import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import PropTypes from 'prop-types';

const styles = {
  btn: {
    width: '9em',
    background: 'ghostwhite',
    fontSize: '18px',
    padding: '8px',
    border: '1px solid lightblue',
    marginLeft: '10px',
    fontWeight: '800',
  },
  btnsContain: {
    width: '100%',
    textAlign: 'center',
  },
};


const DashButtons = props => (
  // on click, goes to a form for create a new post
  <div className="dashBtns" style={styles.btnsContain}>
    <button style={styles.btn} className="edit btn" onClick={props.handleEdit}>Edit</button>
    <button style={styles.btn} className="delete btn" onClick={props.confirmDelete}>Delete</button>
    <button style={styles.btn} className="deleteAll btn" onClick={props.deleteAll}>Delete all posts</button>
    <button style={styles.btn} className="btn"><Link to="/newpost">New Post</Link></button>
  </div>
);

DashButtons.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
};

export default Radium(DashButtons);
