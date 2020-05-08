const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Posts extends MongoDataSource {
  getPostById(postId) {
    return this.findOneById(postId);
  }
};
