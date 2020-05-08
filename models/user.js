const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Users extends MongoDataSource {
  getUser(userId) {
    return this.findOneById(userId);
  }
};
