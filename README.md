# GRAPHQL Basics

Understanding the basics of GraphQL: Types, schema, resolvers and tools

*Libraries use:

- graphql-yoga: Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience: https://github.com/prisma/graphql-yoga

graphql-yoga is based on the following libraries & tools:

express/apollo-server: Performant, extensible web server framework
graphql-subscriptions/subscriptions-transport-ws: GraphQL subscriptions server
graphql.js/graphql-tools: GraphQL engine & schema helpers
graphql-playground: Interactive GraphQL IDE


*Subscriptions
graphql-yoga contains a small module that implements GraphQL subscriptions for Node.js named graphql-subscriptions: https://github.com/apollographql/graphql-subscriptions

To start using subscriptions, import the SubPub class and create a new instance to pass to the context server config object:

Example:

import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  context: {
    db,
    pubsub
  }
});

server.start(() => {
  console.log('The server is running!');
});