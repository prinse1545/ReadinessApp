const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const User = require('./resolvers/user')
const Subscription = require('./resolvers/subscription')
const Utils = require('./utils')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(() => console.log("Server is running on http://localhost:4000"))
