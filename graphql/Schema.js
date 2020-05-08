const { gql } = require('apollo-server');
module.exports = gql`
  type Post {
    _id: ID!
    title: String
    content: String
    slug: String
    summary: String
    images: [String]
    likes: mutual
    view: mutual
    comments: [Comment]
    creator: User
    createdAt: String
    updatedAt: String
  }

  type mutualAction {
    mutual: Boolean
    result: Boolean!
    count: Int
  }
  type mutual {
    mutual: Boolean
    count: Int
  }

  type Comment {
    _id: ID!
    user: UserForComment!
    text: String
    date: String
    refer_to: ID
  }
  type UserForComment {
    name: String
    _id: String
    email: String
  }

  type PostData {
    posts: [Post]!
    totalPosts: Int!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    avatar: String
    status: String!
  }

  type AuthData {
    token: String!
    userId: String!
  }
  input PasswordEdit {
    oldPassword: String!
    newPassword: String!
  }

  input UserInputData {
    email: String!
    password: String!
    name: String!
    status: String
  }
  input UserEditData {
    password: PasswordEdit
    avatar: String
    name: String
    email: String
    status: String
  }

  input PostInputData {
    title: String!
    content: String!
    images: [String]
  }

  input CommentInputData {
    text: String!
    onPost: ID!
    name: String
    refer_to: ID
  }

  input FindPost {
    slug: String
    id: ID
  }
  input PostEditData {
    title: String
    content: String
    images: [String]
  }

  type Query {
    login(email: String!, password: String!): AuthData!
    posts(page: Int): PostData!
    post(search: FindPost): Post!
  }

  type Mutation {
    signUp(user: UserInputData!): User!
    editUser(user: UserEditData!): User!

    addPost(post: PostInputData): Post!
    editPost(postId: ID!, postData: PostEditData): Post
    likePost(id: ID!): mutualAction!
    dislikePost(id: ID!): mutualAction!

    addComment(comment: CommentInputData!): Boolean
    deleteComment(commentId: ID!, onPost: ID!): Boolean
  }
`;
