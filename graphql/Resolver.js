const postResolvers = require('./postResolver');
const userResolver = require('./userResolver');
module.exports = {
  Query: {
    ...postResolvers,
    ...userResolver,
  },
  Mutation: {},
};
