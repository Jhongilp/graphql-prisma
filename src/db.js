// user demo data
const users = [
  {
    id: '1113627751',
    name: 'Jonathan',
    email: 'jhongilp@gmail.com',
    age: 32
  },
  {
    id: '1113589632',
    name: 'Linda',
    email: 'linda@gmail.com',
    age: 32
  },
  {
    id: '1113785963',
    name: 'Sandra',
    email: 'sandra@gmail.com',
    age: 30
  }
]

const posts = [
  {
    id: '1001',
    title: 'Learning GraphQL',
    body: 'Body 1001',
    published: true,
    author: '1113627751'
  },
  {
    id: '1002',
    title: 'Learning React',
    body: 'Body 1002',
    published: true,
    author: '1113627751'
  },
  {
    id: '1003',
    title: 'Learning Python',
    body: 'Body 1003',
    published: false,
    author: '1113589632'
  },
  {
    id: '1004',
    title: 'Learning JavaScript',
    body: 'Body 1004',
    published: true,
    author: '1113627751'
  },
  {
    id: '1005',
    title: 'Learning Rust',
    body: 'Body 1005',
    published: false,
    author: '1113627751'
  },
]

const comments = [];

const db = {
  users,
  posts,
  comments
}

export default db;

