const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema } = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return {
                    id: 1,
                    name: 'John Doe',
                    age: 20
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})