function generateID() {
  return Math.floor((Math.random() * Math.floor(100000000)) + 1);
}

const Mutation = {
  createUser(parent, args, { db }, info) {
    const { name, email, age } = args.data;
    const isEmailTaken = db.users.some(user => user.email === email);
    if (isEmailTaken) {
      console.log('Email taken');
      // throw new Error;
    }
    const id = generateID();
    const user = {
      id,
      name,
      email,
      age
    }
    db.users.push(user);
    return user;
  },

  updateUser(parent, args, { db }, info) {
    const { name, email, age } = args.data;
    const userUpdate = db.users.find(user => user.id === args.id);
    userUpdate.name = name;
    userUpdate.email = email;
    userUpdate.age = age;
    return userUpdate
  },

  createPost(parent, args, { db, pubsub }, info) {
    const { title, body, published, author} = args.data;
    const authorExists = db.users.some(user => user.id === author);
    if(!authorExists) {
      throw new Error('Author does not exist!');
    }
    const post = {
      id: generateID,
      title,
      body,
      published,
      author
    }
    db.posts.push(post);
    pubsub.publish('post', {
      post: {
        mutation: 'CREATED',
        data: post
      }
    });
    return post;
  },
  createComment(parent, args, { db, pubsub }, info) {
    const { text, author, post } = args;
    const authorExists = db.users.some(user => user.id === author);
    const postExists = db.posts.some(p => p.id === post);
    if(authorExists && postExists) {
      const comment = {
        id: generateID,
        text,
        author,
        post
      }
      db.comments.push(comment);
      pubsub.publish(`comment ${post}`, { comment });
      return comment;
    } else {
      throw new Error('Author or post does not exist');
    }
  }
};

export default Mutation;