require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const Resolvers = require('./Graphql/Resolver');
const Schema = require('./Graphql/Schema');

const { MongoClient } = require('mongodb');
const { users, posts } = require('./models');

const { GetUser } = require('./helpers');

const server = new ApolloServer({
  playground: true,
  introspection: true,
  typeDefs: Schema,
  resolvers: Resolvers,
  dataSources: () => ({
    users: new users(client.db().collection('users')),
    posts: new posts(client.db().collection('posts')),
  }),
  context: ({ req }) => {
    // currentToken = currentToken.indexOf(' ') !== 0 ? currentToken : currentToken.split(/\ /)[1]
    const token = req.headers.authorization || '';
    const user = GetUser(token);
    return user;
  },
});

const client = new MongoClient('mongodb://localhost:27017/posts', { useUnifiedTopology: true });
client.connect().then((_) => {
  server.listen(process.env.PORT || 1234).then(async ({ url }) => {
    console.log(url);
  });
});
