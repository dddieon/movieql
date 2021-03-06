import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/scheme.graphql",
  resolvers
});

server.start(() => console.log("GraphQL server running"));