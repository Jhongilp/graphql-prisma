import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://192.168.99.100:4466"
});

// prisma.query.users(null, '{ id name email posts { id title} }').then( data => {
//     console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "GraphQL 101",
//         body: "",
//         published: false,
//         author: {
//           connect: {
//             id: "cjxggneyr003l0730io8lcfi1"
//           }
//         }
//       }
//     },
//     "{ id title body published }"
//   )
//   .then(data => {
//     console.log(data);
//     return prisma.query.users(null, "{ id name email posts { id title} }");
//   })
//   .then(data => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });

prisma.mutation
  .updatePost(
    {
      where: {
        id: "cjxom8zin000a0730mpltz25q"
      },
      data: {
        title: "GraphQL and Node.js",
        published: false,
        body: ""
      }
    },
    "{ id }"
  )
  .then(data => {
    return prisma.query.posts(null, "{ id title body published }");
  })
  .then(data => {
    console.log(JSON.stringify(data, undefined, 2));
  });
