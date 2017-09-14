import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Radium from 'radium';

const styles = {
  btn: {
    width: '9em',
    background: 'ghostwhite',
    fontSize: '18px',
    padding: '8px',
    border: '1px solid black',
    marginLeft: '10px',
  },
  btnsContain: {
    width: '100%',
    textAlign: 'center',
  },
};

let DashButtons = props => (
  // on click, goes to a form for create a new post
  <div className="dashBtns" style={styles.btnsContain}>
    <button style={styles.btn} className="edit btn" onClick={props.handleEdit}>Edit</button>
    <button style={styles.btn} className="delete btn" onClick={props.confirmDelete}>Delete</button>
    <button style={styles.btn} className="deleteAll btn" onClick={props.deleteAll}>Delete all posts</button>
    <button style={styles.btn} className="btn"><Link to="/newpost">New Post</Link></button>
  </div>
);

DashButtons = Radium(DashButtons);
export default DashButtons;
