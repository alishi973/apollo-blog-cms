const postResolvers = require('./postResolver');
module.exports = {
  Query: {
    ...postResolvers,
  },
  Mutation: {},
};
