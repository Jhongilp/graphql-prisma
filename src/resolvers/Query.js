const Query = {
  users(parent, args, { db }, info) {
    return db.users;
  },

  posts(parent, args, { db }, info) {
    if(args.query) {
      return db.posts.filter((post) => {
        const title = db.post.title.toLowerCase().includes(args.query.toLowerCase()); 
        const body = db.post.body.toLowerCase().includes(args.query.toLowerCase()); 
        return title || body
      });
    }
    return db.posts;
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  }
};

export default Query;