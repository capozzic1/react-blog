

import React from 'react';
import Layout from '../../components/Layout/Layout';
import Radium, { Style } from 'radium';
/* eslint-disable */

const styles = {
  singlePost : {
    border: '1px solid black',
    position:'relative',
    top:'3em',
        minHeight: '300px'
  }

}

let SinglePost = (props) => {
  const post = props.location.state.info;


  return (
    <Layout>
      <div className="single-post" style={styles.singlePost}>
        <div className="titleAuthor">
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-author">Posted by: {post.author}</h3>
        </div>
        <div className="postDate">
          <h3 className="post-date">Date: {post.date}</h3>
        </div>
        <p className="post-body">{post.body}</p>
      </div>
      <Style
        scopingSelector = '.single-post'
        rules={{


          '.post-title, .post-author' : { height: '7px' },
          '.post-title, .post-author, .post-date, .post-body':
          {
            left: '10px',
            position:'relative',

          },

          mediaQueries:{
            '(min-width:425px)': {
              '.postDate':{
                float:'right',
                position:'relative',
                bottom:'4em',
                textAlign:'right',
                right:'2em'
              },
              '.titleAuthor, .postDate':{
                width:'50%'
              }
            }
          }
        }}
      />
        </Layout>
  );
};

SinglePost = Radium(SinglePost);
export default SinglePost;
