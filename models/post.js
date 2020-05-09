const { MongoDataSource } = require('apollo-datasource-mongodb');
const { ObjectId } = require('mongodb');

module.exports = class Posts extends MongoDataSource {
  async getPostById(postId) {
    return this.findOneById(ObjectId(postId));
  }
  async getPostBySlug(slug) {
    return await this.collection.findOne({ slug });
  }
};
