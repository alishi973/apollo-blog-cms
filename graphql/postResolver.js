module.exports = {
  posts: (_, id) => {
    console.log(id);
    return { title: 'sdlm' };
  },
  post: async (_, params, dataSources, d) => {
    console.log(await dataSources.dataSources.posts.getPostById('5eb5aa7b469e052130ffac06'));
    // console.log(params.slug);
    return { title: 'ok' };
  },
};
