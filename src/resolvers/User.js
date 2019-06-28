const User = {
  posts(parent, args, { db }, info) {
    return db.posts.filter(post => parent.id === post.author);
  }
}

export default User;