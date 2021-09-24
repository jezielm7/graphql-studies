const { ApolloServer, gql } = require('apollo-server');

function findUser() {
  return {
    name: 'Jeziel Marques',
    age: 20,
  }
}

const typeDefs = gql`
  type User {
    name: String
    age: Int
  }

  type Query {
    getUser: User
  }
`;

const resolvers = {
  Query: {
    getUser: findUser,
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();