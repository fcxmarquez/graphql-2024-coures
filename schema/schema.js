const graphql = require('graphql');
const { usersData, hobbiesData, postsData, userHobbiesData } = require('../data/dummyData');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema, GraphQLList } =
  graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a user in the system with their basic information',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return postsData.filter((post) => post.userId === parent.id);
      }
    },
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        const hobbyIds = userHobbiesData
          .filter((hobby) => hobby.userId === parent.id)
          .map((hobby) => hobby.hobbyId);
        return hobbiesData.filter((hobby) => hobbyIds.includes(hobby.id));
      }
    }
  })
});

const HobbyType = new GraphQLObjectType({
  name: 'Hobby',
  description: 'Hobby of the user',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        const userIds = userHobbiesData
          .filter((userHobby) => userHobby.hobbyId === parent.id)
          .map((userHobby) => userHobby.userId);
        return usersData.filter((user) => userIds.includes(user.id));
      }
    }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post of the user',
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return usersData.find((user) => user.id === parent.userId);
      }
    }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Description',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return usersData.find((user) => user.id === args.id);
      }
    },
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return hobbiesData.find((hobby) => hobby.id === args.id);
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return postsData.find((post) => post.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
