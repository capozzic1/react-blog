
import React from 'react';


export default class PostList extends React.Component {
  render() {
    const posts = this.props.posts;
    let postDivs;

    /*  const postDivs = posts.map((post) => {

    });
    */
    if (posts.length !== 0) {
      postDivs = posts.map(post => (
        <div className="post-item" key={post._id}>
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-date">{post.date}</h3>
          <h3 className="author">{post.author}</h3>
          <p className="body">{post.body}</p>
        </div>
      ));
      console.log(posts);
    }


    return (
      <div className="post-container">
        {postDivs}
      </div>
    );
  }
}
