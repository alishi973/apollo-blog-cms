const { ApolloError } = require('apollo-server');
module.exports = {
  posts: async (_, { page }, { dataSources }) => {
    let posts = await dataSources.posts
      .aggregate([
        { $lookup: { from: 'users', localField: 'creator', foreignField: '_id', as: 'creator' } },
        {
          $project: {
            _id: true,
            iamges: true,
            summary: true,
            slug: true,
            views: true,
            likes: true,
            title: true,
            content: true,
            'creator.name': true,
            'creator.email': true,
            createdAt: true,
          },
        },
        { $unwind: { path: '$creator' } },
      ])
      .skip((page - 1) * 10)
      .limit(10)
      .toArray();
    const totalPosts = await dataSources.posts.countDocuments();
    return { totalPosts, posts };
  },
  post: async (_, params, dataSources, d) => {
    const data = params.search.slug
      ? await dataSources.dataSources.posts.getPostBySlug(params.search.slug)
      : await dataSources.dataSources.posts.getPostById(params.search.id);
    if (!data) throw new ApolloError('Post Not Found');
    return data;
  },
};
