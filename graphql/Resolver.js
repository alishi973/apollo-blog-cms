module.exports = {
  Query: {
    posts: (_, id) => {
      console.log(id);
      return { title: 'sdlm' };
    },
    post: (_, params, context, d) => {
      return { title: 'ok' };
    },
  },
  Mutation: {},
};
