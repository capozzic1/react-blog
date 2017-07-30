
import React from 'react';

export default class PostList extends React.Component {
  render() {
    const posts = this.props.posts;


    /*  const postDivs = posts.map((post) => {

    });
    */
    if (posts.length !== 0) {
      const postDivs = posts.map((post) => {
        console.log(post);
      });
    }

    return (
      <div className="post-container">

      </div>
    );
  }
}
