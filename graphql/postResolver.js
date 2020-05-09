const { ApolloError } = require('apollo-server');
module.exports = {
  posts: (_, id) => {
    console.log(id);
    return { title: 'sdlm' };
  },
  post: async (_, params, dataSources, d) => {
    const data = params.search.slug
      ? await dataSources.dataSources.posts.getPostBySlug(params.search.slug)
      : await dataSources.dataSources.posts.getPostById(params.search.id);
    if (!data) throw new ApolloError('Post Not Found');
    return data;
  },
};
