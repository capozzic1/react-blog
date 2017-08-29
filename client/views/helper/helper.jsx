

export function findPost(postId) {
  console.log(`${postId} test`);
  const posts = this.props.posts;
  const len = posts.length;
  for (let i = 0; i < len; i++) {
    if (posts[i]._id === postId) {
      this.setState({
        currentPostInfo: posts[i],
        redirect: true,
      });
    }
  }
}

export function handleClick(e) {
  // get the post id that was clicked on
  e.preventDefault();
  const postId = e.target.className;

  findPost(postId);
}
